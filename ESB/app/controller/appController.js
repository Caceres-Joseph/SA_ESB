'use strict';
var Log = require('../model/db.js');
var dir = require('../../../direcciones.js');
var axios = require('axios');
/*
+----------------------------------------
| Logs
+---------------------------------------- 
| Operaciones con logs
*/

exports.getLogs = function (req, res) {
  console.log(dir.ipCliente())
  res.send(JSON.stringify(Log.getAllLogs()));
};

/*
+----------------------------------------
| Listar Usuarios
+---------------------------------------- 
| Retorna la lista de usuarios
| que estan registrados en la base de 
| datos
*/

function obtenerClientes() {
  return new Promise(resolve => {

    axios.get(dir.ipCliente() + "getListaClientes")
      .then((res) => {
        //Registrndo en el log
        Log.insert(-1, "Obteniendo el listado de clientes");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(-1, "Falló el listado de clientes: " + error);
        resolve(error);
      })
  });
}

exports.getLstClientes = async function (req, res) {
  var retorno = await obtenerClientes();
  res.send(JSON.stringify(retorno));
};

/*
+----------------------------------------
| Buscar Uber
+---------------------------------------- 
| 1. Traer ubicacion del cliente por medio del servicio de clientes
| 2. Contactar con el piloto uber 
| 3. Registrar el viaje
| 4. Responderle al cliente
*/

/*
+------------------ 
| 1. Ubicación del cliente
*/
function obtenerUbicacion(nombre, password) {
  return new Promise(resolve => {

    axios.post(dir.ipCliente() + "obtenerUbicacion", { nombre: nombre, password: password })
      .then((res) => {
        //Registrndo en el log
        Log.insert(res.data.id, "Buscando el cliente y obteniendo la ubicación");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(-1, "Falló la ubicación del cliente: " + error);
        resolve({ id: -1 });
      })
  });
}

/*
+------------------ 
| 2. Contactar con el piloto
*/
function obtenerPiloto(ubicacion) {
  return new Promise(resolve => {

    axios.post(dir.ipPiloto() + "buscarPilotoDisponible", ubicacion)
      .then((res) => {
        //Registrndo en el log
        Log.insert(ubicacion.id, "Buscando piloto disponible");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(-1, "Falló la ubicación del piloto disponible: " + error);
        resolve({ id: -1 });
      })
  });
}

/*
+------------------ 
| 3. Registrar viaje
*/
function registrarViaje(ubicacion, piloto) {


  let env = {
    idCliente: ubicacion.id,
    idPiloto: piloto.idPiloto,
    posX_cliente: ubicacion.posX,
    posY_cliente: ubicacion.posY,
    posX_piloto: piloto.posX,
    posY_piloto: piloto.posY
  };

  return new Promise(resolve => {
    axios.post(dir.ipRastreo() + "registrarViaje", env)
      .then((res) => {
        //Registrndo en el log
        Log.insert(ubicacion.id, "Registrando un nuevo viaje");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(-1, "Falló el registro del viaje: " + error);
        resolve({ id: -1 });
      })
  });
}
/*
+------------------ 
| 4. Responderle al cliente
*/
exports.obtenerUber = async function (req, res) {
  var ubicacion = await obtenerUbicacion(req.body.nombre, req.body.password);

  //validando si existe el usuario
  if (ubicacion.id == -1)
    res.send(JSON.stringify("El usuario no está registrado y/o error en usuario/contraseña"));

  //buscando un piloto en la ubicación del cliente
  var piloto = await obtenerPiloto(ubicacion);
  if (ubicacion.idPiloto == -1)
    res.send(JSON.stringify("Lo sentimos, no hay pilotos disponibles por el momento :("));


  //Registrando el viaje
  var viaje = await registrarViaje(ubicacion, piloto);
  if (viaje.id == -1)
    res.send(JSON.stringify("Lo sentimos, usted ya solicitó un Uber, por favor espere la llegada de éste"));
   

  var resp = {
    mensaje: "Solicitud exitosa, en breves momentos llegará su piloto, por favor espere.",
    idCliente: ubicacion.id,
    datosDelPiloto: piloto
  }
  res.send(JSON.stringify(resp));
};


/*
+----------------------------------------
|Estado de llegada
+---------------------------------------- 
| 1. Traer datos del cliente por medio del servicio de clientes
| 2. Obtener la ubicación del uber 
*/

/*
+------------------ 
| 2.Estado del a llegada
*/
exports.estadoLlegada = async function (req, res) {
  var cliente = await obtenerUbicacion(req.body.nombre, req.body.password);

  //validando si existe el usuario
  if (cliente.id == -1)
    res.send(JSON.stringify("El usuario no está registrado y/o error en usuario/contraseña"));


    //console.log(cliente);
  //Registrando el viaje
  var estado = await getUbicacionPiloto(cliente);
  if (estado.id == -1)
    res.send(JSON.stringify("Lo sentimos, usted no ha solicitado ningún Uber"));
  
  res.send(JSON.stringify(estado));
};

/*
+------------------ 
| 2.Ubicación del piloto
*/
function getUbicacionPiloto(cliente) {


  return new Promise(resolve => {
    axios.post(dir.ipRastreo() + "getEstadoViaje", cliente)
      .then((res) => {
        //Registrndo en el log
        Log.insert(cliente.id, "Obteniendo la ubicación del piloto del viaje");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(cliente.id, "Falló la ubicación de la llegada del piloto " + error);
        resolve({ id: -1 });
      })
  });
}


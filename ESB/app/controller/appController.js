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
        resolve(error);
      })
  });
}

/*
+------------------ 
| 2. Contactar con el piloto
*/


/*
+------------------ 
| Metodo de la ruta
*/
exports.obtenerUber = async function (req, res) {
  var ubicacion = await obtenerUbicacion(req.body.nombre, req.body.password);
  retorno = "Su uber está en camino";

  //validando si existe el usuario
  if (ubicacion.id == -1)
    retorno= "El usuario no está registrado y/o error en usuario/contraseña"; 



  res.send(JSON.stringify(retorno));
};

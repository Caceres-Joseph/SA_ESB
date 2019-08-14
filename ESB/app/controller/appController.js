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
        Log.insert(0, "Obteniendo el listado de clientes");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(0, "Falló el listado de clientes: " + error);
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
| Buscar el uber del cliente
*/

//Primero revisar si el cliente está registrado
function obtenerClientes() {
  return new Promise(resolve => {

    axios.get(dir.ipCliente() + "getListaClientes")
      .then((res) => {
        //Registrndo en el log
        Log.insert(0, "Obteniendo el listado de clientes");
        resolve(res.data);
      })
      .catch((error) => {
        //Registrndo en el log
        Log.insert(0, "Falló el listado de clientes: " + error);
        resolve(error);
      })
  });
}

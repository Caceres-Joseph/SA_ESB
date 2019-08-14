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

exports.getLogs2 = function (req, res) {
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


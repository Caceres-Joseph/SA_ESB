'use strict';
var Log = require('../model/db.js');
var dir = require('../../../direcciones.js');
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
| Operaciones con logs
*/

exports.getLstClientes = function (req, res) {



  res.send(JSON.stringify(Log.getAllLogs()));
};


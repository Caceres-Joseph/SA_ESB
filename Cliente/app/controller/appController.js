'use strict';
var Cliente = require('../model/db.js');

/*
+------------------ 
| Lista de clientes
+------------------- 
*/
var clientes = [
  {
    id: 12,
    nombre: "Jhosef",
    edad: 43
  },
  {
    id: 3,
    nombre: "Diego",
    edad: 43
  }
];

exports.getLstClientes = function (req, res) {


  res.send(JSON.stringify(Cliente.getAllCustomers()));
};


/*
+------------------ 
| Lista de clientes
+------------------- 
*/
exports.killProcess = function (req, res) {


  var cmd = require('node-cmd');

  cmd.get(
    "kill -9 " + req.body.pid,
    function (err, data, stderr) {


      console.log("kill -9 " + req.body.pid);
      res.send(JSON.stringify(data));
    }
  );



};

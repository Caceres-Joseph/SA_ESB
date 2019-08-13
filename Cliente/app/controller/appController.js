'use strict';

/*
+------------------ 
| Lista de clientes
+------------------- 
*/ 
exports.getLstClientes = function (req, res) {


  res.send(JSON.stringify("hola amiguitos"));
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

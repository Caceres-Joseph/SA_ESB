'use strict';
var Cliente = require('../model/db.js');

/*
+------------------ 
| Lista de clientes
+------------------- 
*/

exports.getLstClientes = function (req, res) {
  res.send(JSON.stringify(Cliente.getAllCustomers()));
};

/*
+------------------ 
| Obtener ubicación
+------------------- 
*/
exports.getLocation = function (req, res) {

  //limites de los numeros random
  var min = 0;
  var max = 1000;
  var retorno = { id: -1 };

  for (let i = 0; i < Cliente.getAllCustomers().length; i++) {
    const element = Cliente.getAllCustomers()[i];
    if (element.nombre == req.body.nombre && element.password == req.body.password) {

      //genero ubicación random
      var posX = Math.floor(Math.random() * (+max - +min)) + +min;
      var posY = Math.floor(Math.random() * (+max - +min)) + +min;
      retorno = {
        id: element.id,
        posX: posX,
        posY: posY
      }
      break;
    }
  }

  res.send(JSON.stringify(retorno));
};

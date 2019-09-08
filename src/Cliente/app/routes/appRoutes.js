'use strict';



module.exports = function (app) {
  var cliente = require('../controller/appController.js.js');
 /*
  +----------------------------------------
  | Listado de clientes
  +---------------------------------------- 
  | Devuelve un listado de los clientes
  */
  app.route('/getListaClientes')
    .get(cliente.getLstClientes);
 /*
  +----------------------------------------
  | Obtner la ubicación del cliente
  +---------------------------------------- 
  | Si está registardo el cliente, 
  | devuelve una ubicación random
  */

  app.route('/obtenerUbicacion')
    .post(cliente.getLocation);

};
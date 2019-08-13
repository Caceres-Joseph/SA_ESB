'use strict';



module.exports = function (app) {
  var cliente = require('../controller/appController.js');

  app.route('/getListaClientes')
    .get(cliente.getLstClientes);

  app.route('/killProcess')
    .post(cliente.killProcess);

};
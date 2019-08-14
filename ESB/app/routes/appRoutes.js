'use strict';


var logs = require('../controller/appController.js');

module.exports = function (app) {

  /*
  +----------------------------------------
  | Get Logs 
  +---------------------------------------- 
  | Retorno de todos los Logs
  |
  */

  app.route('/getLogs')
    .get(logs.getLogs);

  /*
  +----------------------------------------
  | Get Clientes 
  +---------------------------------------- 
  | Retorno de todos los clientes
  |
  */
  app.route('/getLstClientes')
    .get(logs.getLstClientes);

  /*
  +----------------------------------------
  | Pedir Uber 
  +---------------------------------------- 
  | Busca un uber para el cliente
  */
  app.route('/buscarUber')
    .post(logs.obtenerUber);

    
  /*
  +----------------------------------------
  | Pedir Uber 
  +---------------------------------------- 
  | Busca un uber para el cliente
  */
  app.route('/obtenerEstadoLlegadaPiloto')
  .post(logs.estadoLlegada);

};

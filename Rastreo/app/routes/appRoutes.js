'use strict';

module.exports = function (app) {
  var Viaje = require('../controller/appController.js');


  /*
   +----------------------------------------
   | Listado de Viajes
   +---------------------------------------- 
   | Devuelve un listado de los Pilotos
   */
  app.route('/getListaViajes')
    .get(Viaje.getLstViajes);


  /*
   +----------------------------------------
   | Registrar un nuevo viaje
   +---------------------------------------- 
   | Crea un nuevo registro en el listado
   | de viajes actuales
   */

  app.route('/registrarViaje')
    .post(Viaje.registrarViaje);

};
'use strict';

module.exports = function (app) {
  var Viaje = require('../controller/appController.js.js');


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
    
  /*
   +----------------------------------------
   | Estado viaje
   +---------------------------------------- 
   | Muestra la ubicación del piloto y la distancia que le queda
   */

  app.route('/getEstadoViaje')
  .post(Viaje.getEstadoViaje);



};
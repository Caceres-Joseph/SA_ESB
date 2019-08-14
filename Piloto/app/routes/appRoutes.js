'use strict';



module.exports = function (app) {
  var Piloto = require('../controller/appController.js');
  /*
   +----------------------------------------
   | Listado de Pilotos
   +---------------------------------------- 
   | Devuelve un listado de los Pilotos
   */
  app.route('/getListaPilotos')
    .get(Piloto.getLstPilotos);


  /*
  +----------------------------------------
  | Buscar piloto
  +---------------------------------------- 
  | Devuelve el piloto que hará el viaje
  */

  app.route('/buscarPilotoDisponible')
    .post(Piloto.buscarPiloto);

};
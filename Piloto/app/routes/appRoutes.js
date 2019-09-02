'use strict';



module.exports = function (app) {
  var Piloto = require('../controller/appController.js');



  /*
  +----------------------------------------
  | Buscar piloto
  +---------------------------------------- 
  | Devuelve el piloto que hará el viaje
  */

  app.route('/buscarPilotoDisponible')
    .post(Piloto.buscarPiloto);
  /*
   +----------------------------------------
   | Listado de Pilotos
   +---------------------------------------- 
   | Devuelve un listado de los Pilotos
   */
  app.route('/getListaPilotos')
    .get(Piloto.getLstPilotos);
};
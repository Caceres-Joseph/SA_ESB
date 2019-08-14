'use strict';
var Piloto = require('../model/db.js');

/*
+------------------ 
| Lista de Pilotos
+------------------- 
*/

exports.getLstPilotos = function (req, res) {
  res.send(JSON.stringify(Piloto.getAllPilotos()));
};


/*
+----------------------------------------
| Buscar Piloto
+----------------------------------------  
| Busca pilotos disponibles
|
*/

exports.buscarPiloto = function (req, res) {

  //console.log(req.body);
  //posX = req.body.posX;
  //posY = req.body.posY;

  var retorno = { idPiloto: -1 };
  for (let i = 0; i < Piloto.getAllPilotos().length; i++) {
    const element = Piloto.getAllPilotos()[i];
    if (element.disponible) {

      retorno = element;
      //marcando como ocupado al piloto;
      element.disponible = false;
      break;
    }
  }

  res.send(JSON.stringify(retorno));
};

'use strict';
var Viaje = require('../model/db.js');

/*
+------------------ 
| Lista de Viajes
+------------------- 
*/

exports.getLstViajes = function (req, res) {
  res.send(JSON.stringify(Viaje.getAllViajes()));
};

/*
+------------------ 
| Registrar Viaje
+------------------- 
*/
exports.registrarViaje = function (req, res) {


  //limites de los numeros random 

  var retorno = { id: 1 };

  //revisando si el cliente ya está en un viaje para no registrarlo dos veces
  for (let i = 0; i < Viaje.getAllViajes().length; i++) {
    const element = Viaje.getAllViajes()[i];
    if (req.body.idCliente == element.idCliente) {
      retorno = { id: -1 };
      break;
    }
  }

  //No está registardo el usuario, hay que registrarlo
  if (retorno.id != -1) {
    Viaje.nuevo(req.body);
  }


  res.send(JSON.stringify(retorno));
};


/*
+------------------ 
| Estado del viaje
+------------------- 
*/

exports.getEstadoViaje = function (req, res) {
  //Buscando si tiene viaje el usuario
  var retorno = { id: -1 };
  for (let i = 0; i < Viaje.getAllViajes().length; i++) {
    const element = Viaje.getAllViajes()[i];
    if (req.body.idCliente == element.idCliente) {
      retorno = {
        general: element,
        llegada: {
          faltaX: Math.abs(element.posX_piloto - element.posX_cliente),
          faltaY: Math.abs(element.posY_piloto - element.posY_cliente),
          distanciaLlegada: Math.sqrt(Math.pow(element.posY_piloto, 2) + Math.pow(element.posY_cliente, 2))
        }
      }
      break;
    }
  }
  res.send(JSON.stringify(retorno));
};
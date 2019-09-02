'use strict';
var Viaje = require('../model/db.js');


/*
+------------------ 
| Estado del viaje
+------------------- 
*/

exports.getEstadoViaje = function (req, res) {
  
  console.log("[Rastreo]estado del viaje");
  //Buscando si tiene viaje el usuario
  var retorno = { id: -1 };
  //console.log(req.body.id);
  for (let i = 0; i < Viaje.getAllViajes().length; i++) {
    const element = Viaje.getAllViajes()[i];
    if (req.body.id == element.idCliente) {
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
/*
+------------------ 
| Registrar Viaje
+------------------- 
*/
exports.registrarViaje = function (req, res) {

  console.log("[Rastreo]Registro de viaje");
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
| Lista de Viajes
+------------------- 
*/

exports.getLstViajes = function (req, res) {
  res.send(JSON.stringify(Viaje.getAllViajes()));
};

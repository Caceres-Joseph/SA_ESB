'user strict';

/*
+----------------------------------------
| Modelo
+---------------------------------------- 
| Atributos de los Viajes
|
*/
var Viaje = function (viaje) {
    this.idCliente = viaje.idCliente;
    this.idPiloto = viaje.idPiloto;
    this.posX = viaje.posX;
    this.posY = viaje.posY;
    this.estado=true;
};

/*
+----------------------------------------
| Lista de Viajes 
+---------------------------------------- 
| Viajes disponibles en la base de datos
|
*/
var Viajes = [];

/*
+----------------------------------------
| Get Viajes 
+---------------------------------------- 
| Retorno de todos los Viajes
|
*/
Viaje.getAllViajes = function (result) {
    return Viajes;
};


Viaje.nuevo = function (viaje) {
    //agregando a la base de datos de pilotos
    Viajes.push(
        new Viaje({
            idCliente: viaje.idCliente,
            idPiloto: viaje.idPiloto, 
            posX: viaje.posX,
            posY: viaje.posY, 
        })
    )
}

module.exports = Viaje;
'user strict';

/*
+----------------------------------------
| Modelo
+---------------------------------------- 
| Atributos de los Pilotos
|
*/
var Piloto = function (piloto) {
    this.idPiloto = piloto.idPiloto;
    this.nombre = piloto.nombre;
    this.placas = piloto.placas;
    this.posX = piloto.posX;
    this.posY = piloto.posY;
    this.disponible = piloto.disponible;
};


/*
+----------------------------------------
| Lista de Pilotos 
+---------------------------------------- 
| Pilotos disponibles en la base de datos
|
*/
var Pilotos = [];

var min = 0;
var max = 10000;
for (let i = 0; i < 10; i++) {

    //genero ubicación random
    var posX = Math.floor(Math.random() * (+max - +min)) + +min;
    var posY = Math.floor(Math.random() * (+max - +min)) + +min;

    //agregando a la base de datos de pilotos
    Pilotos.push(
        new Piloto({
            idPiloto: i,
            nombre: "Piloto" + i,
            placas: i,
            posX: posX,
            posY: posY,
            disponible: true
        })
    )
}


/*
+----------------------------------------
| Get Pilotos 
+---------------------------------------- 
| Retorno de todos los Pilotos
|
*/
Piloto.getAllPilotos = function getAllPilotos(result) {

    return Pilotos;
};


module.exports = Piloto;
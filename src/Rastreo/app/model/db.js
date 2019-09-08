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
    this.posX_piloto = viaje.posX_piloto;
    this.posY_piloto = viaje.posY_piloto;
    this.posX_cliente = viaje.posX_cliente;
    this.posY_cliente = viaje.posY_cliente;
    this.estado = true;
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

/*
+----------------------------------------
| Nuevo viaje
+---------------------------------------- 
| Registra un nuevo viaje
*/

Viaje.nuevo = function (viaje) {
    //agregando a la base de datos de pilotos
    Viajes.push(
        new Viaje({
            idCliente: viaje.idCliente,
            idPiloto: viaje.idPiloto,
            posX_piloto: parseInt(viaje.posX_piloto),
            posX_cliente: parseInt(viaje.posX_cliente),
            posY_cliente: parseInt(viaje.posY_cliente),
            posY_piloto: parseInt(viaje.posY_piloto),
        })
    )
}

/*
+----------------------------------------
| Backround que reduce la distancia
+---------------------------------------- 
| Función que va reduciendo la distancia
| en la que va llegando el conductor
| La función se ejecuta cada 5 segundos
*/

reducirDistancia();

function reducirDistancia() {

    //console.log("[Rastreo]Reduciendo distancia");

    setTimeout(() => {
        //recorrer todo el arreglo
        for (let i = 0; i < Viajes.length; i++) {
            const element = Viajes[i];

            //Eje X
            if (element.posX_piloto == element.posX_cliente) 
            //llegó
            {

            } else if (element.posX_piloto > element.posX_cliente)
            //hay que restar
            {
                element.posX_piloto -= 1;

            } else
            //hay que suamar
            {
                element.posX_piloto += 1;
            }

            
            //Eje Y
            if (element.posY_piloto == element.posY_cliente) 
            //llegó
            {

            } else if (element.posY_piloto > element.posY_cliente)
            //hay que restar
            {
                element.posY_piloto -= 1;

            } else
            //hay que suamar
            {
                element.posY_piloto += 1;
            }
 
        }

        //Creando un ciclo
        reducirDistancia();
    }, 5000);
}





module.exports = Viaje;
'user strict';

/*
+----------------------------------------
| Modelo
+---------------------------------------- 
| Atributos de los logs
|
*/
var Log = function (lo) {
    this.idUsuario = lo.id;
    this.descripcion = lo.descripcion;
};


/*
+----------------------------------------
| Lista de Logs 
+---------------------------------------- 
| Se registran todas las acciones que se vayan realizando
|
*/
var Logs = ["sin logs"];

 


/*
+----------------------------------------
| Get Logs 
+---------------------------------------- 
| Retorno de todos los Logs
|
*/
Log.getAllLogs = function getLogs(result) {

    return Logs;
};


module.exports = Log;
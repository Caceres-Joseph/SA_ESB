'user strict';

/*
+----------------------------------------
| Modelo
+---------------------------------------- 
| Atributos de los logs
|
*/
var Log = function (id, descripcion) {
    this.idUsuario = id;
    this.descripcion = descripcion;
    this.created_at = new Date();

};


/*
+----------------------------------------
| Lista de Logs 
+---------------------------------------- 
| Se registran todas las acciones que se vayan realizando
|
*/
var Logs = [];

 


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

Log.insert= function(id, descripcion){
    Logs.push(new Log(id,descripcion))
}


module.exports = Log;



/*
+----------------------------------------
| Imports
+---------------------------------------- 
*/

var dir = require('../direcciones.js');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    cors = require('cors')
    ;
/*
+----------------------------------------
| Servidor
+---------------------------------------- 
| Configuración del puerto en donde
| estará funcionando el servidor
*/
 
port = process.env.PORT || dir.portRastreo();
//Cors 
app.use(cors()) 

//para decodificar los post
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Listener
app.listen(port, function () {
    console.log('[Servicio Rastreo] web server listening on port: '+port.toString())
});
/*
+----------------------------------------
| Rutas
+---------------------------------------- 
*/
var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route

/*
+----------------------------------------
| Imports
+---------------------------------------- 
*/

const express = require('express'),
    app = express(),
    cors = require('cors')
    ;
/*
+----------------------------------------
| Servidor
+---------------------------------------- 
| Configuración del puerto en donde
| estará funcionando el servidor
*/
 
port = process.env.PORT || 3000;
//Cors 
app.use(cors()) 
app.listen(port, function () {
    console.log('CORS-enabled web server listening on port: '+port.toString())
});

/*
+----------------------------------------
| Rutas
+---------------------------------------- 
*/
var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
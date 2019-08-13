'use strict';


/*
+----------------------------------------
| Get Logs 
+---------------------------------------- 
| Retorno de todos los Logs
|
*/
module.exports = function (app) {
  var logs = require('../controller/appController.js');

  app.route('/getLogs')
    .get(logs.getLogs);
 

};
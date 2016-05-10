var mysql      = require('mysql');
var connection = mysql.createConnection({
     host     : 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', 
     user     : 'ffv5smn8usgj1j5r', 
     password : 'u79oz9rbgsiumfxe', 
     database : 'aljea3ucxqjcou0i' 
     // changed this after Saturday's lecture.
});

connection.connect(function (err) {
       if (err) {
           console.error('MYSQL error: ' + err.stack);
       return;
       }
       console.log('Drizzy burgers_db connected as id: ' + connection.threadId); 
   });
module.exports = connection;


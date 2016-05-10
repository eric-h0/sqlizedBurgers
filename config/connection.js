var mysql      = require('mysql');
var connection = mysql.createConnection({
     port     : 3306,
     host     : 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', 
     user     : 'zobmujvis4x7wqde', 
     password : 'jjnklli4s1b5ygnb', 
     database : 'aljea3ucxqjcou0i' 
     // changed this after Saturday's lecture.
});

connection.connect(function (err) {
       if (err) {
           console.error('MYSQL error: ' + err.stack);
       return;
       }
       console.log('Drizzy burgers_db connected as ID: ' + connection.threadId); 
   });
module.exports = connection;


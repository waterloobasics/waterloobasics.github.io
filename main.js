const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const http = require('http');
const fs = require('fs');
const con = require("./DBConnection");

const hostname = '127.0.0.1';
const port = '3000';

//using a static folder
app.use(express.static('docs'));

//server connection to the discussion board
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/docs/discussion-board.html'));
  
  //hopefully query the database?
  var conn = con.getConnection();
  conn.query("SELECT * FROM discussion.discussion", function (error, results, fields) {
    if (error) throw error;
    results.forEach((discussion) => {
      console.log(discussion);
    });
  });
  conn.end();
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log(`Server running at http://${hostname}:${port}/`)

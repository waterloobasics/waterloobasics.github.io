const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const http = require('http');
const fs = require('fs');
const con = require("./DBConnection");

const hostname = '127.0.0.1';
const port = '3000';
const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./assets/index.html').pipe(res);

    var conn = con.getConnection();
    conn.query("SELECT * FROM discussion.discussion", function (error, results, fields) {
      if (error) throw error;
      results.forEach((discussion) => {
        console.log(discussion);
      });
    });
    conn.end();
  }
  else if (req.method == "GET" && req.url == "/assets/styles.css") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream('./assets/styles.css').pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
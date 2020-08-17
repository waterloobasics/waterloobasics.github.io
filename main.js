const http = require('http');
const fs = require('fs');
const con = require("./DBConnection");

const hostname = '127.0.0.1';
const port = '3000';

//from original file
const logo = document.querySelectorAll('#applying__svg path')

console.log(logo);

for (let i = 0; i<logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}

//amanda's addition
const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./docs/index.html').pipe(res);

    var conn = con.getConnection();
    conn.query("SELECT * FROM discussion.discussion", function (error, results, fields) {
      if (error) throw error;
      results.forEach((discussion) => {
        console.log(discussion);
      });
    });
    conn.end();
  }
  else if (req.method == "GET" && req.url == "/docs/styles.css") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream('./docs/styles.css').pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
const http = require('http');
const fs = require('fs');
 
const hostname = '127.0.0.1';
const port = '3000';
 
const server = http.createServer((req, res) => {
  if(req.method == 'GET' && req.url == '/')
  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./assets/index.html').pipe(res);
  }
  else if(req.method == "GET" && req.url == "/assets/styles.css")
  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream('./assets/styles.css').pipe(res);
  }
  else if(req.method == 'GET' && req.url == '/assets/dicussion-board.html')
  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./assets/discussion-board.html').pipe(res);
  }
  else if(req.method == "GET" && req.url == "/assets/discussion-styles.css")
  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream('./assets/discussion-styles.css').pipe(res);
  }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
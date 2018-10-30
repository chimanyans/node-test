const server = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/config", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

server.createServer(app).listen(port, hostname);

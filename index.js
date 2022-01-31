const http = require('http');
const fs = require('fs');

const onRequest =  (request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  fs.readFile('./index.html', null, (error, data) => {
    if(error) {
      response.writeHead(404);
      response.write("file not found");
    } else {
      response.write(data);
    }
    response.end()
  });
}

const onRequest2 = (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    name: "Haiqal Ramanizar Al Fajri",
    age: 22,
    gender: "male",
  };
  response.end(JSON.stringify(data));
};

http.createServer(onRequest).listen(5000);
http.createServer(onRequest2).listen(4000);
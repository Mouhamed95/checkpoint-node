console.log("HELLO WORD")
let http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1> Hello Node </h1> \n');
 }).listen(8081);
 console.log('Server running at http://127.0.0.1:8081/');

 let fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

let data = fs.readFileSync('welcome.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");   
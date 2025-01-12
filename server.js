const http = require('http');

const server = http.createServer((req,res) => {
   console.log(req.url,req.method);

   //setheader content type
   res.setHeader('content-type', 'text/html');
   res.write('<head><link rel="stylesheet" href="#"</head>');
   res.write('<p>hello ninjas from my node</p>')
   res.write('<h1>hello ninjas from my node</h1>')
   res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening request on 3000 andrew');
});
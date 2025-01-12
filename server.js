const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let path = './views/';
    let statusCode = 200; // Initialize statusCode

    switch (req.url) {
        case '/':
            path += 'index.html';
            statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            statusCode = 200;
            break;  
        case '/about-me':
            // redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;
        default:
            path += '404.html';
            statusCode = 404;
            break;
    }

    // Set header content type
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = statusCode; // Set the status code

    // Send HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening request on 3000 andrew');
});

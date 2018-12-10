const http = require('http');
var port = process.env.PORT || 8080;

const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('Welcome in very very simple server!');
    res.end();
});

app.listen(port);
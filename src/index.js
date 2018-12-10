const http = require('http');
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('Welcome in very very simple server!');
    res.end();
});

app.listen(3000);
const http = require('http');
const data = require('../server/utils/data.js');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log()
    const {url} = req;

    console.log(url)
    if(url == '/rickandmorty/character'){

        res.writeHead(200,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(data));
    }

    res.writeHead(404);
    return res.end();

}).listen(3001, "localhost");
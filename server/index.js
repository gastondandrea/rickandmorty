const http = require('http');
const data = require('./utils/data');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes('/rickandmorty/character')){
        const id = url.split("/").pop();
        const character = data.find((char)=>{
            return char.id === Number(id);
        })
        if(character){
            res.writeHead(200,{'Content-Type':'application/json'});
            return res.end(JSON.stringify(character));
        }else{
            res.writeHead(404,{'Content-Type':'application/json'});
            return res.end(JSON.stringify({message:"Character Not Found"}));
        }
    }

    res.writeHead(404,{'Content-Type':'application/json'});
    return res.end(JSON.stringify({message:"Wrong URL"}));

}).listen(3001, "127.0.0.1", ()=>{console.log('Server listening on port 3001')});
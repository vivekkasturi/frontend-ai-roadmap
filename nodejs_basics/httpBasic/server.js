const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Hello, World!');
    } else if (req.url==='/users'){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify([{name:'Vivek'},{name:'Uma'}]));
    }else if(req.url==='/health' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({status:'OK'}));
    }
    else {
        res.writeHead(404,{'Content-Type':'text/plain'})
        }
});

    const PORT = 3000;

    server.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    });

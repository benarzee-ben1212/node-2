const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req,res) => {
    const reqPath = req.url
    if(reqPath === '/name'){
       res.end("Hello world")
    }else if(reqPath === '/fullname'){
        res.end("Hello world2")
    }
    else if(reqPath === reqPath){
         res.end("welcome")
    }
   else{
    res.end("<h1>404 error<\h1>")
   }
    console.log(req.url)
    
})

server.listen(5000,'127.0.0.1',() => {
    console.log('listening on port 5000')
})
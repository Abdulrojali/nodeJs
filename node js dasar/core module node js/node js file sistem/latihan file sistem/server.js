const fs=require('fs')
const http=require('http')


const server =http.createServer(function(req,res){
    fs.readFile('server.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
})
server.listen(8000)
console.log('server listen in port 8000')
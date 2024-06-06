const http=require('http')
const server=http.createServer(function(req,res){
    res.setHeader('content-type','text/html')
    res.write(`
    <body>
    <div class='container'>
    <nav>
    <h3>heading navigasi</h3>
    <ul>
    <li>home</li>
    <li>menu</li>
    <li>about</li>
    </ul>
    </nav>
    </div>
    </body>
    `)
    res.end()
})
server.listen(8080)
console.log('server run in port 8080')
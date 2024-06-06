const fs=require('fs')
const http=require('http')

const server=http.createServer((req,res)=>{
    // res.setHeader("Content-Type","html")
    // res.setHeader("Access-control-Allow-Origin","*")
    res.writeHead(200,"content-type","text/html")
   const html=fs.readFileSync(`./httpreadhtml.js`,'utf-8')
   res.write(html)
})

server.listen(8080,()=>{
    console.log('port listen in port 8080')
})
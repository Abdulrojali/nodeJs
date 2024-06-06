const http=require('http')

http.createServer((req,res)=>{
    res.write('hello world')
    // res.setHeader('content-type','text')
    console.log(req.url)
    console.log(req.headers)
    console.log(req.method)
    res.end()
})
.listen(8000,()=>{
    console.log('listening port in 8000')
})
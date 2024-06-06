const http =require('http')

const server=http.createServer((req,res)=>{
  res.setHeader('Conten-type','text/plain')
  res.setHeader('Access-Contol-Alow-Origin',"*")
  res.write('welcome to http server')
  res.end()
})

server.listen(8080)
console.log('server listen in port 8080')
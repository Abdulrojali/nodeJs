const http=require('http')

// membuat web server
http.createServer((request,Response)=>{
    // response server di baca
    Response.write('hello world')
    Response.end()
    // mendengarkan response
}).listen('8000',()=>{
    console.log('web server running at port 8000')
})

// A. macam macam methode memanipulasi response module http

// 1. res.write('conteks') response ini digunakan untuk menangkap data body 
// contoh res.write('hello world')

// 2. res.writeHeader(statusCode,statusMassage,headers) digunakan untuk menulis headers dan juga status code
// contoh res.writeHeader(200,{'content-Type':'text/plain'})

// 3. res.setHeader(name,value) digunakan untuk menetapkan header didalam http
// contoh res.setHeader('Content-Type','html/text')

// 4. res.getHeader('name') digunakan untuk mendapatkan response header tertentu didalam http
// contoh res.getHeader('Content-Type')

// 5. res.end(name,encoding,callback) digunakan untuk mengakhiri response header di http
// contoh res.end('end response')


// B. macam macam request methode untuk mendapatkan informasi tentang permintaan http

// 1. request.url adalah permintaan url lengkap yang di proses oleh http
// 2. request.methods adalah permintaan methode yang di gunakan http
// 3. request.headers adalah permintaan rincian header yang di gunakan http
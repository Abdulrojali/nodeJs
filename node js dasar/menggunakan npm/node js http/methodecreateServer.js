const http=require('http')
const fs=require('fs')
// 1. create server digunakan untuk membuat server http
const server=http.createServer(function(req,res){

// 2. res.writehead digunakan untuk menulis header respons.
    res.writeHead(200,{'content-type':'text/html'})

// 3. res.write digunakan untuk menulis data ke badan respons
    res.write('hello world')

// 4. res.end digunakan untuk menutup respons
    res.end('ini adalah response dari server')
})
// 5. listen(port) mendengarkan koneksi pada host dan port tertentu.
server.listen(8080)
console.log(`server listen in port 8080`)


// 6. http request digunakan untuk membuat permintaan HTTP ke server lain

// const req=http.request(options,(res)=>{
//     console.log(res.statusCode)
// })
// const options={
//     hostname: 'www.example.com',
//     port: 80,
//     path: '/api',
//     method: 'GET'
// }


// 7. req.on('data',callback) digunakan untuk menangani data yang diterima dari permintaan POST
// req.on('error',(error)=>{
//     console.error(`error ${error}`)
// })

// 8. req.end() digunakan untuk mengakhiri permintaan
// req.end()


 http.createServer((req, res) => {
  // 9. Mendapatkan URL dari permintaan
  const url = req.url;
  
  // 10. Mendapatkan metode HTTP dari permintaan
  const method = req.method;
  
  // 11. Mendapatkan header dari permintaan
  const headers = req.headers;
  
  // Inisialisasi sebuah variabel untuk menyimpan data tubuh permintaan
  let body = '';
  
  // 12. Menangani data yang diterima dari permintaan POST
  req.on('data', (chunk) => {
    body += chunk.toString(); // Mengonversi buffer menjadi string dan menambahkannya ke dalam variabel body
  });
  
  // 13. Menangani akhir dari data yang diterima dari permintaan
  req.end()
 })
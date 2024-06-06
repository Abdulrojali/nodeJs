// os disini digunakan untuk mengetahui informasi tentang operasi sistem


// cara inisasi os es6
import os, { totalmem } from 'os'

// // cara iniasiai os common js
// const os=require('os')


// 1. os.hostname()  digunakan untuk mengembalikan nama komputer
let namaHost=os.hostname()
console.log(`your house name : ${namaHost}`)

//2 . os.type() digunakan untuk menampilkan tipe sistem operasi
let typsOs=os.type()
console.log(typsOs)

//3. os.platfom() digunakan untuk menampilkan informasi sistem operasi yang sedang digunakan
let platfom=os.platform()
console.log(platfom)

//4. os.arch() digunakan untuk menampilkan architektur komputer
let architekturK=os.arch()
console.log(architekturK)

//5. os.cpus() digunakan untuk menampilkan deskripsi cpu dengan bentuk array
let cpusData=os.cpus()
console.table(cpusData)

//6. os.totalmem() digunakan untuk menampilkan total memory dari komputer dalam bentuk byte
let totalMem=os.totalmem()
console.log(`total memory in your komputer : ${totalMem} byte`)

//7. os.freemem() digunakan untuk menampilkan total memory yang kosong di komputer
let freemem=os.freemem()
console.log(`total free memory in your komputer : ${freemem} byte`)

// 8. os.uptime() digunakan untuk menampilkan waktu yang berlalu saat komputer di hidupkan
let uptime=os.uptime()
console.log(`waktu yang telah ditempuh saat komputer di hidupkan : ${uptime} second`)

//9. os.userinfo() digunakan untuk menampilkan informasi pengguna saat ini
let userinfo=os.userInfo()
console.table(userinfo)

//10. os.networkInterfaces() digunakan untuk menampilkan object deskripsi antara muka
let networkInterfaces=os.networkInterfaces()
console.table(networkInterfaces)

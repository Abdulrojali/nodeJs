// file sistem adalah fungsi dari node js untuk berinteraksi dengan berkas / document

// cara inisiasi menggunakan es6js
// import fs from 'fs'

// // cara inisiasi mengguankan common js 
// const fs =require('fs')

import fs from 'fs'
// membaca file secara 
//1. fs.readFile('nama dokumen','jenis dokumen yang di baca','data,dan err')
// fs.readFile('coremodule.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


// menulis file
// 2. fs.writeFileSync('nama dokument','content','jenis dokumen yang di baca')
// fs.writeFileSync('testing.txt','data berhasil di tulis','utf-8')



// menambah data ke file
// 3. fs.appendFile('nama dokument','content','jenis data dokument',callback)
// fs.appendFile('testing.txt','menambah data','utf-8',(err,data)=>{
//     if(err){console.log(err)}
//     else{
//         console.log('data berhasil di tambah')
//     }
// })

// //  menambah data ke berkas yang sudah ada
// // 4. fs.writeFile('nama dokument','teks yang di tambah','jenis teks',callback)
// fs.writeFile('testing.txt','menimpa data','utf-8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('data berhasil di baca')
//     }
// })


// membaca direktory file
// 5. fs.readdir("path file",'callback')
fs.readdir('./',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`direktory yang di baca ${data}`)
    }
})



// membaca statistik informasi berkas 
// 6. fs.stat('file',callback)
fs.stat('testing.txt',(err,sks)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(sks.size)
        console.log(sks.birthtime)
        console.log(sks.mtime)
    }
})
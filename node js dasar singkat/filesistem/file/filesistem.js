const { clear } = require('console')
const fs=require('fs')
const path=require('path')

// 1. read file
// disini adalah methode readfile secara asynchronous makanya harus ada callbacknya 
// fs.readFile(`${__dirname}/contoh1.js`,'utf-8',(err,res)=>{
//     if(err){
//     throw err
//     }
//     setTimeout(() => {
//         console.log(`readfile secara asynchronous : ${res}`)
//     }, 500);
// })

// sync disini adalah synchronous jadi tidak perlu ada callback 
// const readSync=fs.readFileSync(`${__dirname}/contoh1.js`,'utf-8')
// console.log(`readfile dengan synchronous ${readSync}`)



// 2. write file

// write file secara asynchronous
fs.writeFile(`${__dirname}/writeAsync.txt`,'teks ini di tulis didalam file bernama filesistem.js',(err,res)=>{
    if(err) throw err
    else {
        console.log('sukses write file')
    }
})

// fs.readFile(`${__dirname}/writeAsync.txt`,'utf-8',(err,res)=>{
//     if(err)throw err
//     console.log(`data yang di tulis di file filesistem.js :${res}`)
// })
// const readfile=fs.readFileSync(`${__dirname}/writeAsync.txt`,'utf-8')
// console.log(readfile)


// writefilesync
fs.writeFileSync(`${__dirname}/writeSync.txt`,'ini adalah teks yang dibuat menggunakan writeFileSync')


fs.readFile(`${__dirname}/writeSync.txt`,'utf-8',(err,res)=>{
    if(err) throw err
    console.log(res)
})


// 3. append file
// digunakan untuk menambah data di file

// fs.appenfile 
fs.appendFile(`${__dirname}/contoh1.js`,'`teks append menggunakan Asynchronous mode`',(err)=>{
    if(err) throw err
    console.log('teks didalam file berhasil di tambahkan')
})
fs.readFileSync(`${__dirname}/contoh1.js`,'utf-8')


// fs.apeendFileSync
fs.appendFileSync(`${__dirname}/contoh1.js`,'`append file secara synchronous')
fs.readFileSync(`${__dirname}/contoh1.js`,'utf-8')


// 4. delete file 
// fs.unlinks
// fs.unlink(`${__dirname}/contoh1.js`,(err)=>{
//     if(err) throw err
//     console.log(`file berhasil di hapus secara asynchronous`)
// })

// // fs.unlikSync
// fs.unlinkSync(`${__dirname}/writeAsync.txt`)
// console.log('file berhaisl di hapus secara synchronous')
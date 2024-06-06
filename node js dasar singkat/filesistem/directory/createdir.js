const fs=require('fs')
// create dir and read dir in asynchronous
// fs.mkdir('newdiruseAsync',(err)=>{
//     if(err) throw err
//     console.log('sukses to create new dir')
// })
// fs.readdir('.',(err,file)=>{
//     if(err) throw err
//     console.log(`dir is read in Asynchronous  ${file}`)
//     file.forEach(el=>{
//         console.log(el)
//     })
// })

// create dir and read dir in synchronous
fs.mkdirSync('newDirSync')
console.log('sukses create dir synchronous')

const files=fs.readdirSync('.')
console.log('dir read in synchronous')

files.forEach(el=>{
    console.log(el)
})
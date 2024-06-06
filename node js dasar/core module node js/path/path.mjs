// path module digunakan untuk memanipulasi jalur dari path 

// inisiasi path es6
import path from 'path'

// iniasiasi path menggunakan common js
// const path =require('path')


// digunakan untuk menggabungkan jalur path
// 1. path join
const fullpath=path.join('/path','foo','delimite/test.txt')
console.log(fullpath)


// digunakan untuk menkonversi jalur menjadi mutlak(absolute)
//2. path.resolve
const resolve1=path.resolve('path','path.mjs')
console.log(resolve1)


// digunakan mengembalikan bagian akhir dari jalur menjadi string
// 3. path.basename
const basenamePath=path.basename('/path/to/text.txt')
console.log(basenamePath)


// digunakan untuk mengembalikan data direktory dari sebuah jalur
// 4. path.dirname
const direktoryname=path.dirname('path/path.mjs')
console.log(direktoryname)


// digunakan untuk mencari tahu extensi dari direktory path
// 5. path.extname
const extpath=path.extname('path.mjs')
console.log(extpath)



// digunakan untuk memecah beberapa bagian dari path
// 5. path.parse
const parsepath=path.parse('./path/path.mjs')
console.log(parsepath)


// digunakan untuk mengmbalikan bentuk path sesuai asalnya
// 6. path.normalize
const normalizepath=path.normalize('./path/path/path.mjs')
console.log(normalizepath)
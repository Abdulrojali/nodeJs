// path adalah salah satu modul inti yang sering digunakan untuk melakukan operasi 
// terkait jalur file dan direktori. Modul path menyediakan berbagai fungsi untuk mengelola jalur file dan direktori, 
// seperti menggabungkan jalur, menormalkan jalur, mengekstrak bagian jalur, dan lain-lain.
const path=require('path')

// menampilkan nama file
const filename=path.basename('path.js')

// menampilkan extensi file
const extname=path.extname('path.js')

// menggabungkan beberapa file maupun directory 
const joinfile=path.join(__dirname,'files','example.txt')

// menampilkan directory name
const dirname=path.dirname(joinfile)

console.log(`dirname ${dirname}`)
console.log(`filename :${filename}, dirname :${dirname}, extname :${extname}`)
// readline digunakan untuk membaca input / menerima input secara callback

import readline from 'readline'
import process from 'process'

// createInterface digunakan membuat object antara muka pembaca
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// question menampilkan prompt pertanyaan 
rd.question('nama anda :',(nama)=>{
    if(nama===''){
        console.log('anda tidak memasukkan jawaban!!')
    }
    else if(nama!='budi'){
        console.log('nama tidak terdaftar')
    }
    else{
        console.log(`selamat datang ${nama}`)
    }
    // keluar dari question
    rd.close()
})



// dns adalah domain name server yang digunakan untuk menampilkan informasi dari komputer

// cara inisiasi dns es6
import dns from 'dns'

// cara inisiasi dns common js
// const dns=require('dns')


// // mengecek alamat ip dari sebuah domain
// dns.lookup('www.goggle.com',(err,addres,family)=>{
//    if(err){
//     console.log(err)
//    }
//    else{
//     console.log(`your ip :${addres}, your family ${family}`)
//    }
// })


// mendapatkan informasi lengkap sebuah dns
dns.resolve('www.goggle.com','A',(err,addres)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(addres)
    }
})

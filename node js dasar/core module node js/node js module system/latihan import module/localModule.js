
function getNama(nama){
    console.log(`hallo selamat datang ${nama}`)
}
const mahasiswa={
    nama:'budi',
    alamat:'bandung',
    cetakLog(){
        console.log(`halo ${this.nama},alamat anda di ${this.alamat}`)
    }
}
// mengexport module 1 data
// module.exports=getNama


// mengeexport module bannyak data
module.exports.getNama=getNama()
module.exports.mahsiswa=mahasiswa

// atau
module.exports={
    getNama,
    mahasiswa
}
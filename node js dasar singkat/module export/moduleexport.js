const nama ='budi'
const sapaan=function(){
    console.log(`halo ${nama} selamat datang!!`)
}
// nama yang di export ke file lain
module.exports.nama=nama
module.exports.sapaan=sapaan
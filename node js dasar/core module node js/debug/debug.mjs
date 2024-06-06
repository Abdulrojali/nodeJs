// debugger digunakan untuk menjalankan nodejs dalam mode debug
// untuk menjalankan mode node js anda dapat mengetikan  "node inspect nama file"

function hello(nama){
    debugger;
    console.log(`hallo ${nama}`)
}

let nama=hello('budi')
console.log(nama)

// untuk melanjutkan anda tekan c atau keywoard n 

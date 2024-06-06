
const fs=require('fs')

// fs.readFile('osmodule.js','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
function bacaTulis(){
    // menulis file secara asynchronos
    fs.writeFileSync('testing.txt','teks yang di tulis','utf-8');
    console.log('data sedang di baca...')
    setTimeout(() => {
        //membaca file secara asynchronous
        fs.readFile('testing.txt','utf-8',(err,data)=>{
            if(err)throw err;
            console.log(data)
        })
    }, 1000);
    console.log(`data sedang di tambah`)
     // menambah data file secara asynchronous
        fs.appendFile('testing.txt','\n menambah data file','utf-8',(err)=>{
            if(err) throw err;
            console.log('data telah di tambah')
        })

    // membaca data file secara synchronous
        fs.readFileSync('testing.txt','utf-8',(err,data)=>{
            if(err) throw err;
            console.log(`isi data :${data}`)
        })
}

bacaTulis()
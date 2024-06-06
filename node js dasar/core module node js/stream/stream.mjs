// stream digunakan untuk aliran data yang dapat di baca atau di tulis.

import fs from 'fs'

const writer=fs.createWriteStream('path.txt');
writer.write('halo nama saya budi')
writer.write('saya berasal dari sukabumi')
writer.write('makasih')
writer.end()

const reading=fs.ReadStream('path.txt');
reading.addListener('data',(data)=>{
    console.log(data.toString())
})


// perbedaan antara stream dan file sistem
// stream dapat digunakan untuk file sistem untuk membuat,mengubah,membaca data file 
// sedangkan file sistem digunakan untuk membuat,mengubah,membaca directory file
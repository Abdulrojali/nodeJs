const EventEmmiter =require('events')
const fs=require('fs')
const path =require('path')
const eventEmmiter=new EventEmmiter()


const dir=__dirname

eventEmmiter.on('bacaFile',(directory,namefile)=>{
    setTimeout(() => {
        fs.readFile(`${directory}/${namefile}`,'utf-8',(err,res)=>{
            if(err)
            throw err
        console.log(`isi dari file ${namefile} : ${res}`)
        })
    }, 600);
})

eventEmmiter.on('tambahisifile',(konteks,directory,namafile)=>{
    fs.appendFile(`${directory}/${namafile}`,konteks,'utf-8',(err)=>{
        if(err)
        throw err
    console.log('data berhasil di tambah')
    })
})
eventEmmiter.on('menghapusfile',(directory,namafile)=>{
    fs.unlinkSync(`${directory}/${namafile}`)
    console.log(`file ${namafile} berhasil di hapus`)
})

eventEmmiter.on('menulisfile',(directory,namafile,konteks)=>{
    fs.writeFileSync(`${directory}/${namafile}`,konteks)
    console.log('berhasil menulis file')
})

// eventEmmiter.emit('tambahdatafile','file di tambah',dir)
// eventEmmiter.emit('bacaFile',dir,'data.txt')
// eventEmmiter.emit('menghapusfile',dir,'data.txt')

eventEmmiter.emit('menulisfile',dir,'teks.txt','berhasil menulis file di teks.txt')
eventEmmiter.emit('bacaFile',dir,'teks.txt')
eventEmmiter.emit('tambahisifile','tambah data file',dir,'teks.txt')
setTimeout(() => {
    eventEmmiter.emit('bacaFile',dir,'teks.txt')
}, 1000);

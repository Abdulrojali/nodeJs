const os =require('os')
const fs=require('fs')
const datas='sukses to write file';

fs.writeFile('./test.txt',datas,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(datas)
    }
})


fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){[
        console.log(err)
    ]}
    else{
        console.log(data)
    }
})

const http=require('http')
const run =http.createServer(function(err,data){
    console.log(data,err)
});
console.log(run)

console.log(os.tmpdir)
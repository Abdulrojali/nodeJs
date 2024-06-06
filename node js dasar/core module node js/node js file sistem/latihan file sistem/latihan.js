const fs=require('fs')

// 1. readfile 
fs.readFile('testing.txt','utf-8',(err,res)=>{
    if(err){console.log(err)}
    else{
        console.log(res)
    }
})

// 2. writefile
    fs.writeFile('testing.txt','hello world',(err)=>{
        if(err) throw err
        console.log('saved')
    })
    console.log('sebelum update')
    fs.readFile('testing.txt','utf-8',(err,res)=>{
        if(err){console.log(err)}
        else{
            console.log(res)
        }
    }) 


// 3. update file
setTimeout(() => {
    fs.appendFile('testing.txt','update data',(err)=>{
        if(err) throw err
        console.log('updated')
    })    
    console.log('setelah update')
    fs.readFile('testing.txt','utf-8',(err,res)=>{
        if(err){console.log(err)}
        else{
            console.log(res)
        }
    }) 
}, 500);



const path=require('path')
console.log(`dirname to directory name : ${__dirname}`)
console.log(`filename to filename in directory :${__filename}`)
console.log(path.extname(__dirname))
console.log(path.basename(__filename))
console.log(path)
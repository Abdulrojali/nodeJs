// process adalah rangkaian peristiwa yang terjadi pada node js termasuk emiter
import process from 'process'
process.addListener('exit',()=>{
    console.log('process keluar')
})

console.table(process.abort)
console.table(process.arch)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

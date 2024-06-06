// event di gunakan untuk menanggapi peristiwa yang terjadi di node js 

// inisiasi event es6
// import {eventsEmmiter} from 'events'

// inisiasi event common js
const eventEmmiter=require('events')


// membuat object event
const emiter=new eventEmmiter();

// mendengarkan event
emiter.addListener('sapaan',(nama)=>{
    console.log(`hallo ${nama}, selamat datang!!`)
})

// memancarkan emiter event
emiter.emit('sapaan','budi')
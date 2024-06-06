// timer digunakan untuk melakukan scheduling

// callback
// setInterval(() => {
//     console.log(`start date :`,new Date())
// }, 500);


// timer promise

import timers from 'timers/promises'

await timers.setTimeout(() => {
    console.log(new Date())
}, 1000);
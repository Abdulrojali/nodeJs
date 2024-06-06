const moment=require('moment')
console.log(moment().date())
console.log(moment().week())
console.log(moment().month())
console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
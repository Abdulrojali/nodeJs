// Modul os di Node.js memberikan fungsionalitas untuk berinteraksi dengan sistem operasi. 
const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('CPUs:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Temporary Directory:', os.tmpdir());
// _dirname berarti directory file atau document utama yang menyimpan file
console.log(__dirname)

// _filename adalah nama file dan jenis file yang digunakan
console.log(__filename)
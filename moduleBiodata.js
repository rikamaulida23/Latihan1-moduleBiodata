var biodata = require('./Biodata');

var name = 'Rika Maulida'; 
var place = 'Bogor';
var date = '23 Juni 2000'; 
var address = 'Jalan Cifor No 12';

console.log("Nama : "+biodata.nama(name,place,date,address));
console.log("Tempat Lahir : "+biodata.tempat(name,place,date,address));
console.log("Tanggal Lahir : "+biodata.tanggal(name,place,date,address));
console.log("Alamat : "+biodata.alamat(name,place,date,address));

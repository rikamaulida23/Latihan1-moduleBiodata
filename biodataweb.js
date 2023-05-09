var http = require('http');
var biodata = require('./Biodata');
var name = 'Rika Maulida'; 
var place = 'Bogor';
var date = '23 Juni 2000'; 
var address = 'Jalan Cifor No 12';


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
    <h1>Biodata</h1>
    <ul>
        <li>Nama : ${name}</li>
        <li>Tempat Lahir : ${place}</li>
        <li>Tanggal Lahir : ${date}</li>
        <li>Alamat : ${address}</li>
    </ul>
    `
    );
    

    res.end();
}).listen(8087)
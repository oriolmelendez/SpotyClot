const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
var path = require('path');
const PORT = 8888;
var fs = require("fs");
var Readable = require('stream').Readable;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
//Arrel
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/music/:song", (req, res) => {
    console.log(req.params.song);


    const filePath = path.join(__dirname, '/songs/' + req.params.song + '.mp3');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Servidor execuntant-se en el port ${PORT}.`);
});
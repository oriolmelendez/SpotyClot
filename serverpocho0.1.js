const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
var path = require('path');
const PORT = 8888;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Arrel
app.get("/", (req,res) =>{
    // TODO canviar el fitxer html pel correcte
    //res.sendFile(path.join(__dirname + '/public/client_ppt.html'));
});

//Creació de la partida
app.post("/login", (req,res) => {
    //do login stuff
    let usuari = "user";
    let pwd = "pwd01";

    console.log(req);
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor execuntant-se en el port ${PORT}.`);
});

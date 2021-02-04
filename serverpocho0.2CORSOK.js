const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
var path = require('path');
const PORT = 8888;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
//Arrel
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req,res) =>{
    // TODO canviar el fitxer html pel correcte
    //res.sendFile(path.join(__dirname + '/public/client_ppt.html'));
    console.log("get /");
});

//Creació de la partida
app.post("/login/:usuari/:pass", (req,res) => {
    //do login stuff
    let usuari = req.params.usuari;
    let pwd = req.params.pass;
    console.log("post login")
    let usuariDB = "user";
    let pwdDB = "pwd01";

    if(usuari == usuariDB && pwd == pwdDB){
        console.log("ID CORRECTE! ENTRA");
    }else{
        console.log("ID INCORRECTE!")
    }

    console.log(req.params);
    console.log(req.params.usuari);
    console.log(req.params.pass);

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor execuntant-se en el port ${PORT}.`);
});

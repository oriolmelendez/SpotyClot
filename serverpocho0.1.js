const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
var path = require('path');
const PORT = 8888;

//Arrel
app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname + '/public/client_ppt.html'));
});

//Creació de la partida
app.post("/login", (req,res) => {
    //do login stuff
    
});

app.listen(PORT, () => {
    console.log(`Servidor execuntant-se en el port ${PORT}.`);
});

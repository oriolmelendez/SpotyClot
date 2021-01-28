const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
var path = require('path');
var cors = require('cors')

app.use(cors())
const PORT = 8888;

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//Creació de la partida
app.post("/login", (req,res) => {
    console.log(req.params);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor execuntant-se en el port ${PORT}.`);
});
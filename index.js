const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs'); //INFORMANDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.use(express.static('public'));  //UTILIZANDO DO EJS PARA UTILIZAR DE ARQUIVOS ESTÁTICOS (CSS, IMAGENS)

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));  //TRAZ OS DADOS DO FORMULÁRIO EM JAVASCRIPT PARA SER UTILIZADO
app.use(bodyParser.json());

//ROTAS
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/askSave", (req, res) => {
    var title = req.body.title;        //O body REFERE-SE AO BODYPARSER E O title AO NAME DO INPUT
    var description = req.body.description;
    res.send("We received the form! title " + title + " description " + description)
});



app.listen(3000, () => {
    console.log("List on the port http://localhost:3000/");
});


// AULA 37

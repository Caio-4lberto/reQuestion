const express = require("express");
const app = express();

app.set('view engine','ejs'); //INFORMANDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.use(express.static('public'));  //UTILIZANDO DO EJS PARA UTILIZAR DE ARQUIVOS ESTÁTICOS (CSS, IMAGENS)

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/askSave", (req, res) => {
    res.send("We received the form!")
});



app.listen(3000, () => {
    console.log("List on the port http://localhost:3000/");
});


// AULA 37

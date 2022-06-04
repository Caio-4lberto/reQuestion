const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Question = require("./database/Question");
const Answer = require("./database/Answer")

//DATABASE_____________________________________________________
connection
    .authenticate()
    .then(() => {
        console.log("Connection made to database");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })  
//____________________________________________________________


app.set('view engine','ejs'); //INFORMANDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.use(express.static('public'));  //UTILIZANDO DO EJS PARA UTILIZAR DE ARQUIVOS ESTÁTICOS (CSS, IMAGENS)

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));  //TRAZ OS DADOS DO FORMULÁRIO EM JAVASCRIPT PARA SER UTILIZADO
app.use(bodyParser.json());

//ROTAS
app.get("/", (req, res) => {
    Question.findAll({ raw: true, order:[ ['id', 'DESC'] ]}).then(questions => {
        res.render("index", {
            questions: questions
        });
    });
});

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/questionSave", (req, res) => {
    var title = req.body.title;        //O body REFERE-SE AO BODYPARSER E O title AO NAME DO INPUT
    var description = req.body.description;
    // res.send("We received the form! title " + title + " description " + description)
    Question.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect("/")
    })
});

app.get("/question/:id", (req, res) => {
    var id = req.params.id;
    Question.findOne({
        where: {id: id}
    }).then(question => {
        if(question != undefined){ //PERGUNTA ACHADA
            res.render("question",{
                question: question
            });
        }else{ //PERGUNTA NÃO ENCONTRADA
            res.redirect("/");
        }
    });
});


//POST OF THE ANSWER TABLE
app.post("/answer", (req, res) => {
    var body = req.body.body;
    var questionId = req.body.question;
    Answer.create({
        body: body,
        questionId: questionId
    }).then(() => {
        res.redirect("/question/" + questionId);
    })
});

//DELETE 
//     async function teste(questionId) {
 
//         await Question.destroy({
//           where: {
//               id: questionId
//           }
//       }).then(() => {
//           console.log("ERRO");
//       });
//     console.log('fim');
//   };




app.listen(3000, () => {
    console.log("List on the port http://localhost:3000/");
});


// AULA 37

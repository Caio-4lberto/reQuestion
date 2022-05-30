const Sequelize = require("sequelize");
const connection = require("./database");

const Question = connection.define('questions', {     //O NOME QUESTIONS REFERE-SE AO NOME DA TABELAS QUE SERÁ CRIADA
    title:{
        type: Sequelize.STRING,
        allowNull: false                //ALLOWNULL FAZ COM QUE A TABELA SEJA CRIADA APENAS 1 VEZ
    },
    description:{
        type:Sequelize.TEXT,
        allowNull: false
    },
})

Question.sync({force: false}).then(() =>  {});

module.exports = Question;
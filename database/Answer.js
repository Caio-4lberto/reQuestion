const Sequelize = require("sequelize");
const connection = require("./database");

const Answer = connection.define("answer", {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER
    }
})

Answer.sync({force: false});

module.exports = Answer;
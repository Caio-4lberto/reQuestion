const Sequelize = require('sequelize');

const connection = new Sequelize('requestion','postgres','root',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;


var Sequelize = require("sequelize");
var models = require("../config/connection.js"); 

var sqlBurger = seqModel.define("BurgerTable", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  
  burger_name: {
    type: Sequelize.STRING,
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue : 0
  },
  date: {
    type: Sequelize.DATE,
  },
  
});

sqlBurger.sync();
module.exports = sqlBurger;

const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Restaurant model
let Restaurant = sequelize.define("restaurant", {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  Cuisine: Sequelize.STRING,
});

module.exports = { Restaurant };

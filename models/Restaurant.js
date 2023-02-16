const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Restaurant model
const restaurant1 = await Restaurant.create({
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  Cuisine: Sequelize.STRING,
});

module.exports = { Restaurant };

const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Menu model
const menu1 = await this.Menu.create({
  title: Sequelize.STRING,
});
module.exports = { Menu };

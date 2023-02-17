const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    const restaurant1 = new Restaurant({
      name: "KFC",
      location: "London",
      cuisine: "American",
    });
    expect(restaurant1.name).toEqual("KFC");
    expect(restaurant1.location).toEqual("London");
    expect(restaurant1.cuisine).toEqual("American");
  });

  test("can create a Menu", async () => {
    const menu1 = new Menu({
      title: "tastyDiner",
    });
    expect(menu1.title).toEqual("tastyDiner");
  });

  test("can find Restaurants", async () => {
    const restaurant1 = new Restaurant({
      name: "KFC",
      location: "London",
      cuisine: "American",
    });
    expect(typeof Restaurant.findAll()).toEqual("object");
  });

  test("can find Menus", async () => {
    const menu1 = new Menu({
      title: "tastyDiner",
    });
    expect(typeof Menu.findAll()).toEqual("object");
  });

  test("can delete Restaurants", async () => {
    const restaurant1 = new Restaurant({
      name: "KFC",
      location: "London",
      cuisine: "American",
    });
    expect(!restaurant1.destroy()).toEqual(false);
  });
});

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("railway", "root", "q9XeTLIcZf7iVh9d5reS", {
  host: "containers-us-west-35.railway.app",
  port: "6605",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  sequelize.sync({ alter: true });
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;

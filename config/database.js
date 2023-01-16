const mongoose = require("mongoose");

function connect_db() {
  const url = process.env.URL_MONGOOSE;

  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((error) => {
      console.log("Erreur de connection BD", error);
    });
}

module.exports = connect_db;

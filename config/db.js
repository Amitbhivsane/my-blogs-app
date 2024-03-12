const mongoose = require("mongoose");
const colors = require("colors");

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MOGO_URL);
    console.log(
      `connected to mongodb database ${mongoose.connection.host} `.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MOGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connetDB;

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connetDB = require("./config/db");

//env config
// dotenv.config({path:"../n/env"})
dotenv.config();

//Routers imports
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mogodb connection
connetDB();
//rest object
const app = express();

//middelware
app.use(cors()); //used connect to react to node
app.use(express.json()); //json data for used frent end
app.use(morgan("dev"));

//routes form router file
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

///Server create time////////////////////////////
//routes
// callback fun
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Node Server",
//   });
// });
////////////////////////////////////////////////////

// port
const PORT = process.env.PORT || 7070;
//listen
app.listen(7070, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white
  );
});

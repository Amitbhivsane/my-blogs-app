const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controller/userController");
//route object
const router = express.Router();

//get all users :GET
router.get("/all-users", getAllUsers);

//Create Usser :POST

router.post("/register", registerController);

//login :POST
router.post("/login", loginController);

module.exports = router;

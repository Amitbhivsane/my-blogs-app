const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title Required"],
    },
    description: {
      type: String,
      require: [true, "Description Requirsd"],
    },
    image: {
      type: String,
      require: [true, "Image Required"],
    },

    //blog and user relation ship
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "User id is require"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;

const mongoose = require("mongoose");

const validateEmail = require("../Utils/index").validateEmail;

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    unique: "Username must be unique",
    required: "Username is required",
  },

  email: {
    type: "String",
    unique: "email must be unique",
    required: "email is required",
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },

  password: {
    type: "String",
    required: "Please provide a password",
  },
});

let User = mongoose.model("User", userSchema);

const articleSchema = new mongoose.Schema({
  id: "Default",
  title: {
    type: "String",
    required: "please provide the title",
  },

  content: {
    type: "String",
    required: "provide a content to publish",
  },

  user: { type: mongoose.Types.ObjectId, ref: "User" },
});

let Article = mongoose.model("Article, articleSchema");

module.exports = User;
module.exports = Article;
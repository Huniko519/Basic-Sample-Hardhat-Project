const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var User = mongoose.model("User", user);

export default User;

import connectDB from "../../utils/mongodb";
import User from "../../models/user";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = (req, res) => {
  if (req.method === "POST") {
    console.log(req.body.authflag);
    switch (req.body.authflag) {
      case "signup": {
        // Check if name, email or password is provided
        var { username, email, password } = req.body;
        if (username && email && password) {
          try {
            // Hash password to store it in DB
            User.findOne({ email: email }).then((user) => {
              if (user) {
                return res.json({
                  success: false,
                  msg: "Email already exists!",
                });
              } else {
                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) throw err;
                    password = hash;

                    var user = new User({
                      username,
                      email,
                      password,
                    });
                    // Create new user
                    var usercreated = await user.save();
                    return res.send({ success: true, data: usercreated });
                  });
                });
              }
            });
          } catch (error) {
            return res.status(500).send(error.message);
          }
        } else {
          res.status(422).send("data_incomplete");
        }

        break;
      }
      case "signin": {
        console.log("login!!!");
        var { email, password } = req.body;
        // Find user by email
        User.findOne({ email: email }).then((user) => {
          console.log(email);
          // Check if user exists
          if (!user) {
            res.json({ success: false, msg: "This is Unregistered User!" });
          } else {
            // Check password
            bcrypt.compare(password, user.password).then((isMatch) => {
              if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                  id: user.id,
                  email: user.email,
                  username: user.username,
                };

                jwt.sign(
                  payload,
                  "secret",
                  { expiresIn: 31556926 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Galaxy " + token,
                    });
                  }
                );
              } else {
                res.json({ success: false, msg: "Password incorrect!" });
              }
            });
          }
        });
        break;
      }
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(Register);

const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

/* ❗ Bonus 3 - Create User
POST the user info (name, email, password) to localhost:4000/users/signup to create a new user.
Creating a user is only possible if name,email, and password is provided, and password is at least 6 characters long */

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) {
      res
        .status(400)
        .send(
          "missing parameters or your password is less than 6 characters.Password must be at least 5 characters"
        );
    } else {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

// HASHING PASSWORD WITH BCRYPT

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send("missing parameters");
    } else {
      const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;

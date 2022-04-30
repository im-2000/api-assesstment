const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
// const bcrypt = require("bcrypt");

router.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;

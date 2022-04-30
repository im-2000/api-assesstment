const { Router } = require("express");
const router = new Router();
const Team = require("../models").team;
// const bcrypt = require("bcrypt");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Team.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;

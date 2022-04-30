const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
// const bcrypt = require("bcrypt");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Player.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;

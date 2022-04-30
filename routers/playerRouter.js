const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
// const bcrypt = require("bcrypt");

// GET ALL PLAYERS

router.get("/", async (req, res, next) => {
  try {
    res.send(await Player.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// CREATE NEW PLAYER

router.post("/", async (request, response, next) => {
  try {
    const { name, age } = request.body;
    const newPlayer = await Player.create({ name, age });
    response.send(newPlayer);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

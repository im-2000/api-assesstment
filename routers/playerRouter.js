const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
// const bcrypt = require("bcrypt");

// POST create a new player

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

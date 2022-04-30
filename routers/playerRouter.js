const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
// const bcrypt = require("bcrypt");

// ❗ Feature 4 - Write a few routes.
// POST create a new player localhost:4000/players

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

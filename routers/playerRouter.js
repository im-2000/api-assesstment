const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
const Middleware = require("../auth/middleware");

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

// ❗ Bonus 5 - Delete a specific player
//  DELETE a specific player by id, this route is protected by your authorization middleware

router.delete("/:id", Middleware, async (request, response, next) => {
  try {
    const { id } = request.params;

    const player = await Player.findByPk(id);

    if (!player) {
      return response.status(404).send("Sorry, no user with that id");
    }

    const destroyedPlayer = player.destroy();

    //another method
    //user.destroy({ where: { id: id}})

    response.send({
      message: "User terminated",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

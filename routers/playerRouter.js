const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
const Team = require("../models").team;
const Middleware = require("../auth/middleware");

// ❗ Feature 4.2 - POST create a new player localhost:4000/players

router.post("/", async (request, response, next) => {
  try {
    const { name, age, teamId } = request.body;
    const newPlayer = await Player.create({ name, age, teamId });

    response.send(newPlayer);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* ❗ Bonus 5 - Delete a specific player
DELETE a specific player by id, this route is protected by your authorization middleware */

router.delete("/:id", Middleware, async (request, response, next) => {
  try {
    const { id } = request.params;

    const player = await Player.findByPk(id);

    if (!player) {
      return response.status(404).send("Sorry, no user with that id");
    }

    const destroyedPlayer = player.destroy();

    response.send({
      message: "User terminated",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* ❗ Bonus 1 - Validate POST player route
Creating a new player (POST - /players) shouldn't be possible if the client does not provide name, age, and teamId, 
we also want to check if a team with the teamId provided exists. The endpoint should respond with an appropriate 
message and status code. */

router.post("/newplayer", async (req, res, next) => {
  try {
    const { name, age, teamId } = req.body;

    if (!name || !age || !teamId) {
      res.status(400).send("missing parameters");
    } else {
      const newPlayer = await Player.create({
        name,
        age,
        teamId,
      });
      res.send(newPlayer);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;

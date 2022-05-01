const { Router } = require("express");
const router = new Router();
const Player = require("../models").player;
const Team = require("../models").team;
const Middleware = require("../auth/middleware");
const { Op } = require("sequelize");

/* ❗ Feature 4.2 - POST create a new player localhost:4000/players
                    +
    ❗ Bonus 1 - Validate POST player route
    Creating a new player (POST - /players) shouldn't be possible if the client does not provide name, age, and teamId, 
    we also want to check if a team with the teamId provided exists. The endpoint should respond with an appropriate 
    message and status code. */

router.post("/", async (req, res, next) => {
  try {
    const { name, age, teamId } = req.body;
    const team = await Team.findByPk(teamId);
    if (!name || !age || !teamId) {
      res.status(400).send("missing parameters");
    }
    if (team) {
      const newPlayer = await Player.create({
        name,
        age,
        teamId,
      });
      res.send(newPlayer);
    } else {
      console.log(`Team with this id: ${teamId} doesn't exist`);
    }
  } catch (e) {
    next(e);
  }
});

/* ❗ Bonus 2 - Get players above :age years old
- Going to `localhost:4000/players/:age` returns an array players older than the provided age. 
_Tip_: You're going to need query params for this */

router.get("/:age", async (req, res, next) => {
  try {
    const age = parseInt(req.params.age);
    const olderPlayers = await Player.findAll({
      where: {
        age: {
          [Op.gt]: age,
        },
      },
    });
    if (olderPlayers) {
      res.send(olderPlayers);
    } else {
      res.status(404).send("Players not found");
    }
  } catch (e) {
    next(e);
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

module.exports = router;

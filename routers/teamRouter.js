const { Router } = require("express");
const router = new Router();
const Team = require("../models").team;
const Player = require("../models/player");
// const bcrypt = require("bcrypt");

// GET all teams

router.get("/", async (req, res, next) => {
  try {
    res.send(await Team.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// PUT update number of titles of a specific team

router.patch("/:id", async (request, response, next) => {
  try {
    const { titles } = request.body;
    const { id } = request.params;

    const team = await Team.findByPk(id);

    const updatedTeam = await team.update({ titles });

    if (!updatedTeam) {
      res.status(404).send(`User with id ${request.params.id} not found`);
    } else {
      response.send(updatedTeam);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

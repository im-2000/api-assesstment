const { Router } = require("express");
const router = new Router();
const Team = require("../models").team;
const Player = require("../models/player");

// ❗ Feature 4 - Write a few routes
// GET all teams localhost:4000/teams

router.get("/", async (req, res, next) => {
  try {
    res.send(await Team.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// ❗ Feature 4 - Write a few routes. GET a specific team, including all its players localhost:4000/teams/:id

router.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const specificTeam = await Team.findByPk(id, { include: Player });

    if (!specificTeam) {
      response.status(404).send("No users");
    } else {
      response.send(specificTeam);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// ❗ Feature 4 - Write a few routes. PUT update number of titles of a specific team localhost:4000/teams/:id

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

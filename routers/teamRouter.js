const { Router } = require("express");
const Team = require("../models").team;
const Player = require("../models").player;

const router = new Router();

// ❗ Feature 4.1 - GET all teams localhost:4000/teams

router.get("/", async (req, res, next) => {
  try {
    res.send(await Team.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// ❗ Feature 4.3 - GET a specific team, including all its players localhost:4000/teams/:id

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const specificTeam = await Team.findByPk(id, {
      include: Player,
    });
    if (specificTeam) {
      res.send(specificTeam);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

// ❗ Feature 4.4 - PUT update number of titles of a specific team localhost:4000/teams/:id

router.put("/:id", async (request, response, next) => {
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

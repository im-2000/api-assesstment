const { Router } = require("express");
const router = new Router();
const Team = require("../models").team;
const Player = require("../models/player");
// const bcrypt = require("bcrypt");

// // GET ALL TEAMS

// router.get("/", async (req, res, next) => {
//   try {
//     res.send(await Team.findAll());
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

// GET a specific team, including all its players

router.get("/:id", async (req, res, next) => {
  try {
    const specificTeam = await Team.findByPk(req.params.id);

    if (!specificTeam) {
      res.status(404).send(`User with id ${req.params.id} not found`);
    } else {
      res.send(specificTeam);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// // UPDATE TITLES OF TEAM #3

// router.patch("/:id", async (request, response, next) => {
//   try {
//     const { titles } = request.body;
//     const { id } = request.params;

//     const team = await Team.findByPk(id);

//     const updatedTeam = await team.update({ titles });

//     if (!updatedTeam) {
//       res.status(404).send(`User with id ${request.params.id} not found`);
//     } else {
//       response.send(updatedTeam);
//     }
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

module.exports = router;

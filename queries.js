const { request } = require("express");
const { user, team, player } = require("./models");
const Player = require("./models").player;
const { Op } = require("sequelize");

// // ❗ Feature 4 - Write a few routes.
// // GET a specific team, including all its players localhost:4000/teams/:id

// const teamWithPlayers = async (id) => {
//   const result = await team.findByPk(id, {
//     include: [
//       {
//         model: player,
//       },
//     ],
//   });
//   return result.get({ plain: true });
// };

// teamWithPlayers(1).then((team) => console.log("Team with players", team));

/* ❗ Bonus 2 - Get players above :age years old
- Going to `localhost:4000/players/:age` returns an array players older than the provided age. 
_Tip_: You're going to need query params for this */

const olderPlayers = async (playerAge) => {
  const result = await Player.findAll({
    where: {
      age: {
        [Op.gte]: playerAge,
      },
    },
  });
  return result;
};

olderPlayers(35).then((player) => console.log(player));

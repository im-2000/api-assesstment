const { request } = require("express");
const { user, team, player } = require("./models");

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

// Bonus 2 - Get players above :age years old

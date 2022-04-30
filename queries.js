const { user, team, player } = require("./models");

// GET a specific team, including all its players

const teamWithPlayers = async (id) => {
  const result = await team.findByPk(id, {
    include: [
      {
        model: player,
      },
    ],
  });
  return result.get({ plain: true });
};

teamWithPlayers(1).then((team) => console.log("Team with players", team));

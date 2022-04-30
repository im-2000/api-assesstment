require("dotenv").config();
const express = require("express");
const UserRouter = require("./routers/userRouter");
const TeamRouter = require("./routers/teamRouter");
const PlayerRouter = require("./routers/playerRouter");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/teams", TeamRouter);
app.use("/players", PlayerRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));

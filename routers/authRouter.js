// const { Router } = require("express");
// const { toJWT, toData } = require("../auth/jwt");
// const User = require("../models").user;
// const bcrypt = require("bcrypt");

// const router = new Router();

// // router.post("/signup", async (req, res, next) => {
// //   try {
// //     const { email, password, fullName } = req.body;
// //     if (!email || !password || !fullName) {
// //       res.status(400).send("missing parameters");
// //     } else {
// //       const newUser = await User.create({
// //         email,
// //         password: bcrypt.hashSync(password, 10),
// //         fullName,
// //       });
// //       res.send(newUser);
// //     }
// //   } catch (e) {
// //     next(e);
// //   }
// // });

// //  ❗ Bonus 4 - User login. Use jsonwebtoken package and the auth/jwt.js file
// //     POST user credentials to login (email, password)

// router.post("/login", async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res.status(400).send("Please supply a valid email and password");
//     } else {
//       res.send({ jwt: toJWT({ userId: 1 }) });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// module.exports = router;

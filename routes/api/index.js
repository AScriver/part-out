const router = require("express").Router();
const userSignup = require("./userSignup");
const userLogin = require("./userLogin");
const postRoutes = require("./postRoutes");
const userInfo = require("./userInfo");


// Uses /api/...
router.use("/signup", userSignup);
router.use("/post", postRoutes);
router.use("/login", userLogin);
router.use("/user", userInfo);

//dispatch signin and post this user information
// https://stackoverflow.com/questions/44107665/how-to-access-a-browser-cookie-in-a-react-app

module.exports = router;
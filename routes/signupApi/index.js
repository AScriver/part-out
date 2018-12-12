const router = require("express").Router();
const userSignup = require("./userSignup");
const sendUserData = require("./sendUserData");
const passport = require("../../config/passport");

// Uses /api/signup
router.use("/signup", userSignup);
router.use('/user_data', sendUserData);

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json('/');
});

module.exports = router;

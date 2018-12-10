const router = require("express").Router();
const bookRoutes = require("./user");

// Book routes
router.use("/signup", bookRoutes);

module.exports = router;

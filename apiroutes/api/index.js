const router = require("express").Router();
const userDetailsRoutes = require("./userDetails");
const menuRoutes = require("./menu");

// User Detail routes
router.use("/user", userDetailsRoutes);

// Menu routes
router.use("/menu", menuRoutes);

module.exports = router;

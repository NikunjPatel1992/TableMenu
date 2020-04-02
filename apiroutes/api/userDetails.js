const router = require("express").Router();
const userDetailsController = require("../../controllers/userDetailsController");

// Matches with "/api/user"
router.route("/")
  .get(userDetailsController.findAll)
  .post(userDetailsController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userDetailsController.findById)
  .put(userDetailsController.update)
  .delete(userDetailsController.remove);

module.exports = router;

const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/user"
router.route("/")
  .get(menuController.findAll)
  .post(menuController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

module.exports = router;

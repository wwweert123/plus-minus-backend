const express = require("express");
const router = express.Router();
const plusminusController = require("../../controllers/plusminusController");

router.route("/add").post(plusminusController.add);

router.route("/subtract").post(plusminusController.subtract);

module.exports = router;

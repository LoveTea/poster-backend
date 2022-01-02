const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const postController = require("../controllers/postController");

router.post("/add", authController.protect, postController.add);
router.get("/all", authController.protect, postController.all);

module.exports = router;

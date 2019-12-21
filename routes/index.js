const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Hello World!"));
router.get("/goodbye", (req, res) => res.send("Goodbye World!"));

module.exports = router;

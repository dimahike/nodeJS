const express = require("express");

const router = express.Router();

router.use("/", require("../routes/root"));
router.use("/comments", require("../routes/comments"));
router.use("/users", require("../routes/users"));

module.exports = router;

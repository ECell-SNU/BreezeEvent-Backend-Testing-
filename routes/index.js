const router = require("express").Router();
const { Deta } = require("deta");

router.get("/", (req, res) => {
  res.status(200).json({ user: "none" });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const json = { message: "Jenkins Node Test App is Alive!" };
  res.status(200).send(json);
});

module.exports = router;

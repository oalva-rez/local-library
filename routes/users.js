var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get(
  "/cool/:id",
  (req, res, next) => {
    console.log(`The request params are ${req.params.id}`);
    next();
  },
  (req, res, next) => {
    console.log(`This shows after the first log.`);
    res.send(req.url);
  }
);

router.get("/cool", (req, res, next) => {
  console.log("you should not be seeing this");
});
module.exports = router;

const { Router } = require("express");
const { CreateTransfers, getTransfers } = require("./Controllers/Transfers");
const { route } = require("./users");

const router = Router();

router.post("/create", CreateTransfers);
router.get("/get", getTransfers);

module.exports = router;

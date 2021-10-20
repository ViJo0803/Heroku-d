const { Router } = require("express");
const { ServPayment } = require("./Controllers/ServicesPayment");

const router = Router();

router.post("/", ServPayment);

module.exports = router;

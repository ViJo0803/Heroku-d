const { Router } = require("express");
// import all routers;

const Users = require("./users.js");
const Cuentas = require("./cuentas.js");
const Contact = require("./contacts.js");
const Transfers = require("./transfers.js");
const ServicesPayment = require("./servicesPayment.js");

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

router.use("/user", Users);
router.use("/account", Cuentas);
router.use("/transfers", Transfers);
router.use("/servicesPayment", ServicesPayment);
router.use("/contact", Contact);

module.exports = router;

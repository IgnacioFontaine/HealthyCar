const { Router } = require("express");

//Requerir los routers
const userRouter = require("./userRouter");
const vehicleRouter = require("./vehicleRouter");

//Ruter:
const router = Router();

// Configurar los routers
router.use("/user", userRouter);
router.use("/vehicle", vehicleRouter);

module.exports = router;
const { Router } = require("express");

//Requerir los routers
const authorRouter = require("./authorRouter");
const proyectRouter = require("./proyectRouter");

//Ruter:
const router = Router();

// Configurar los routers
router.use("/author", authorRouter);
router.use("/proyect", proyectRouter);

module.exports = router;
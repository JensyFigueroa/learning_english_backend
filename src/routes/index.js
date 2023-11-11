const { Router } = require('express');
// Importar todos los routers;
const getRoutes = require('./getRoutes.js');
const getRoutesPets = require('./getRoutesPets.js');

const router = Router();

// Configurar los routers
router.use('/regularverbs',getRoutes)
router.use('/pets', getRoutesPets)

module.exports = router;
const {Router} = require('express');

const {getRegularVerbs, } = require('../controllers/getControllers.js')
const getRouter = Router();

getRouter.get('/', getRegularVerbs)
// getRouter.get('/service', getService)

module.exports = getRouter;
const routes = require('express').Router();
const ApiRoutes = require('./api');

routes.use(`/${process.env.ROUTE_PREFIX}`, ApiRoutes);

module.exports = routes;
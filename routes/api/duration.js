const routes = require('express').Router();
const DurationApiController = require('../../module/duration/api.controller');

routes.get(`/`, DurationApiController.getAll);
routes.post(`/`, DurationApiController.create);

module.exports = routes;
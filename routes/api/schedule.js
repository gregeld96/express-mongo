const routes = require('express').Router();
const { auth } = require('../../middlewares/authentication');
const ScheduleApiController = require('../../module/schedule/api.controller');

routes.use(auth);
routes.get(`/`, ScheduleApiController.getAllByDate);
routes.post(`/`, ScheduleApiController.create);

module.exports = routes;
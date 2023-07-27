const routes = require('express').Router();
const ConsultationApiController = require('../../module/consultation/api.controller');

routes.get(`/`, ConsultationApiController.getAll);
routes.post(`/`, ConsultationApiController.create);

module.exports = routes;
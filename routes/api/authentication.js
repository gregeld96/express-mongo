const routes = require('express').Router();
const AuthenticationApiController = require('../../module/authentication/api.controller');

routes.post(`/register`, AuthenticationApiController.register);
routes.post(`/login`, AuthenticationApiController.login);

module.exports = routes;
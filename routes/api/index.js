const routes = require('express').Router();
const AuthRoutes = require('./authentication');
const ScheduleRoutes = require('./schedule');
const DurationRoutes = require('./duration');
const ConsultationRoutes = require('./consultation');

routes.use(`/auths`, AuthRoutes);
routes.use(`/schedules`, ScheduleRoutes);
routes.use(`/durations`, DurationRoutes);
routes.use(`/consultations`, ConsultationRoutes);

module.exports = routes;
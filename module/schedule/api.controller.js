const ScheduleService = require("./service")


class ScheduleApiController {
    static async create(req, res, next) {
        try {
            await ScheduleService.create({
                duration: req.body.duration,
                consultation: req.body.consultation,
                time: req.body.time,
                date_start: req.body.date_start,
                date_end: req.body.date_end,
                repeatable: req.body.repeatable,
                type_repeatable: req.body.type_repeatable,
                price: req.body.price,
                classified: req.classified
            });

            res.status(201).json({
                success: true,
                message: 'Success create schedule'
            });
        } catch (error) {
            next({
                error
            })
        }
    }

    static async getAllByDate(req, res, next) {
        try {
            res.status(200).json({
                success: true,
                message: 'Success get all schedule based on date',
                data: await ScheduleService.getAllScheduleByDate({
                    date_start: req.query.date_start,
                    date_end: req.query.date_end,
                    limit: req.query.limit,
                    page: req.query.page,
                    classified: req.classified
                })
            })
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = ScheduleApiController;
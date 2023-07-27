const DurationService = require("./service")

class DurationApiController {
    static async getAll(req, res, next){
        try {
            res.status(200).json({
                success: true,
                message: 'Success get all duration type',
                data: await DurationService.getAll()
            })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async create(req, res, next){
        try {
            await DurationService.create({
                name: req.body.name,
                time: req.body.time,
                time_type: req.body.time_type
            });

            res.status(201).json({
                success: true,
                message: 'Success create duration type',
            })
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = DurationApiController;
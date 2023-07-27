const ConsultationService = require("./service")


class ConsultationApiController {
    static async getAll(req, res, next){
        try {
            res.status(200).json({
                success: true,
                message: 'Success get all consultation type',
                data: await ConsultationService.getAll()
            })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async create(req, res, next){
        try {
            await ConsultationService.create({
                name: req.body.name
            });

            res.status(201).json({
                success: true,
                message: 'Success create consultation type',
            })
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = ConsultationApiController;
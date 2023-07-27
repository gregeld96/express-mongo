const AuthenticationService = require("./service");

class AuthenticationApiController {
    static async register(req, res, next) {
        try {
            await AuthenticationService.register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender,
            })

            res.status(201).json({
                success: true,
                message: 'Success register',
            })
        } catch (error) {
            next({
                error
            })
        }
    }

    static async login(req, res, next) {
        try {
            res.status(200).json({
                success: true,
                message: 'Success login',
                data: await AuthenticationService.login({
                    email: req.body.email,
                    password: req.body.password,
                })
            })
        } catch (error) {
            next({
                error
            })
        }
    }
}

module.exports = AuthenticationApiController;
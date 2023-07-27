const UserService = require("../module/user/service");
const {
    verifyToken
} = require("../utils/jwt");

async function auth(req, res, next) {
    try {
        if(!req.headers.authorization) throw ({
            status: 401,
            message: "You are not authorized!"
        })

        let token = req.headers.authorization.split(' ');

        if (token[0]?.toLowerCase() !== 'bearer') throw ({
            status: 401,
            message: "You are not authorized!"
        })

        const decoded = verifyToken(token[1]);

        const user = await UserService.getByEmail({
            email: decoded.email
        });

        if (!user) throw ({
            status: 404,
            message: "Data not found"
        })

        req.classified = {
            email: user.email,
            id: user.id,
        }

        next()

    } catch (error) {
        next({
            error
        });
    }
}

module.exports = {
    auth
}
const {
    User
} = require('../../models');
const {
    checkPassword,
    hashPassword
} = require("../../utils/hashing");
const {
    generateToken
} = require("../../utils/jwt");
const UserService = require("../user/service");

class AuthenticationService {
    static async register({
        name,
        email,
        gender,
        password
    }) {
        if (!name.trim() || !email.trim() || !gender.trim() || !password.trim()) throw ({
            status: 400,
            message: 'Fill all required field!'
        });

        let exist = await UserService.getByEmail({
            email
        });

        if (exist) throw ({
            success: 400,
            message: 'Email already registered!'
        })

        try {
            await User.create({
                name,
                email,
                gender,
                password: hashPassword(password)
            })
        } catch (error) {
            throw (error)
        }
    }

    static async login({
        email,
        password
    }) {
        try {
            let exist = await UserService.getByEmail({
                email
            });

            if (!exist) throw ({
                success: 400,
                message: 'Email or password incorrrect!'
            })

            if (!checkPassword(password, exist.password)) throw ({
                status: 400,
                message: 'Email or password incorrrect!'
            })

            let token = generateToken({
                email
            })

            return token;
        } catch (error) {
            throw (error)
        }
    }

}

module.exports = AuthenticationService
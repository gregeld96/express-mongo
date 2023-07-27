const { User } = require('../../models');

class UserService {
    static async getByEmail({
        email
    }){
        return await User.findOne({
            email
        });
    }
}

module.exports = UserService;
const {
    Duration
} = require("../../models");;
const moment = require('moment-timezone');

class DurationService {
    static async create({
        name,
        time,
        time_type
    }) {
        try {
            let exist = await this.getByType({
                time,
                time_type
            });

            if(exist) throw({
                status: 400,
                message: 'Duration Type already exist!'
            });
            
            await Duration.create({
                name,
                time: Number(time),
                time_type
            })
        } catch (error) {
            throw (error)
        }
    }

    static async getAll() {
        try {
            return await Duration.find();
        } catch (error) {
            throw (error)
        }
    }

    static async getById({
        id
    }) {
        try {
            return await Duration.findById(id);
        } catch (error) {
            throw (error)
        }
    }

    static async getByName({
        name
    }) {
        try {
            return await Duration.findOne({
                name
            });
        } catch (error) {
            throw (error)
        }
    }

    static async getByType({
        time,
        time_type
    }) {
        try {
            return await Duration.findOne({
                time,
                time_type
            });
        } catch (error) {
            throw (error)
        }
    }

}

module.exports = DurationService
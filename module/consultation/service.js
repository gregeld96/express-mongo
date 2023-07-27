const {
    Consultation
} = require("../../models");;
const moment = require('moment-timezone');

class ConsultationService {
    static async create({
        name
    }) {
        try {
            let exist = await this.getByName({
                name
            });

            if(exist) throw({
                status: 400,
                message: 'Consultation Type already exist!'
            });

            const data = await Consultation.create({
                name
            })
        } catch (error) {
            throw (error)
        }
    }

    static async getAll() {
        try {
            return await Consultation.find();
        } catch (error) {
            throw (error)
        }
    }

    static async getByName({
        name
    }) {
        try {
            return await Consultation.findOne({
                name: {
                    $regex: `${name}`,
                    $options: 'i'
                }
            });
        } catch (error) {
            throw (error)
        }
    }

}

module.exports = ConsultationService
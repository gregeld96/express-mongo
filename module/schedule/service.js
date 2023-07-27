const {
    Schedule,
    SchedulePlan
} = require('../../models');
const ConsultationService = require('../consultation/service');
const DurationService = require('../duration/service');
const moment = require('moment-timezone');

class ScheduleService {
    static async create({
        duration,
        consultation,
        time,
        date_start,
        date_end,
        repeatable,
        price,
        type_repeatable,
        classified
    }) {
        const auth = classified;

        let checkDuration = await DurationService.getByName({
            name: duration
        });

        let checkConsultation = await ConsultationService.getByName({
            name: consultation
        });

        if (!checkDuration || !checkConsultation) {
            throw ({
                message: 'Data not found'
            })
        }

        let schedule = await this.createPlan({
            user_id: auth.id,
            date_start,
            date_end,
            time,
            duration: checkDuration.time,
            type_duration: checkDuration.time_type,
            type_consult: checkConsultation.name,
            price,
            repeatable,
            type_repeatable
        });

        const startDate = new Date(date_start);
        const endDate = new Date(date_end);
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let schedules = [];

        for (let i = 0; i <= diffDays; i++) {
            schedules.push({
                user_id: auth.id,
                date: moment(date_start).add(i + 1, 'day').toISOString(),
                time,
                duration: checkDuration.time,
                type_duration: checkDuration.time_type,
                type_consult: checkConsultation.name,
                price,
                schedule_plan_id: schedule.id
            });

            if (schedules.length == 20) {
                await Schedule.insertMany(schedules);
                schedules = [];
            }
        }

        await Schedule.insertMany(schedules);
    }

    static async createPlan({
        user_id,
        date_start,
        date_end,
        time,
        duration,
        type_duration,
        type_consult,
        price,
        repeatable,
    }) {
        try {
            return await SchedulePlan.create({
                user_id,
                date_start,
                date_end,
                time,
                duration,
                type_duration,
                type_consult,
                price,
                repeatable,
            })
        } catch (error) {
            throw (error)
        }
    }

    static async getAllScheduleByDate({
        date_start,
        date_end,
        limit = 10,
        page = 1,
        classified
    }) {
        try {
            let dateEnd = moment(date_end).add(2, 'day').toISOString();

            // Find Schedule based on Date Start and End
            let data = await Schedule
                .find({
                    user_id: classified.id
                })
                .where('date')
                .gt(date_start)
                .lt(dateEnd)
                .limit(Number(limit))
                .skip(`${Number(limit) * Number(page - 1)}`)

            // Count total schedule on specific date
            let count = await Schedule
                .find({
                    user_id: classified.id
                })
                .where('date')
                .gt(date_start)
                .lt(dateEnd)
                .count();

            let schedules = data.map((res) => {
                // Modified to correct date and time
                let newDate = res.date.toISOString().split("T")[0];
                let modifiedDate = [newDate, ` ${res.time}`];

                // Get time start and time end
                let timeEnd = moment.tz(new Date(modifiedDate), 'Asia/Jakarta').add(res.duration, res.type_duration).format("HH:mm");
                let timeStart = moment.tz(new Date(modifiedDate), 'Asia/Jakarta').format("HH:mm");

                return {
                    id: res.id,
                    date: moment.tz(new Date(modifiedDate), 'Asia/Jakarta').format("DD-MM-YYYY"),
                    consultation_type: res.type_consult,
                    time_start: timeStart,
                    time_end: timeEnd,
                    duration: res.duration,
                    type_duration: res.type_duration,
                    price: res.price
                }
            });

            return {
                schedules,
                count
            }
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = ScheduleService;
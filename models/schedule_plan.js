module.exports = mongoose => {
    const Schedule = mongoose.model(
        "schedule_plans",
        mongoose.Schema({
            user_id: {
                type: String,
                required: true,
            },
            date_start: {
                type: Date,
                required: true,
            },
            date_end: {
                type: Date,
                required: true
            },
            time: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            duration: {
                type: String,
                required: true
            },
            type_duration: {
                type: String,
                required: true
            },
            type_consult: {
                type: String,
                required: true
            },
            repeatable: {
                type: Boolean,
                required: true
            },
            type_repeatable: {
                type: String,
                required: false
            },
        }, {
            timestamps: true
        })
    );

    return Schedule;
};
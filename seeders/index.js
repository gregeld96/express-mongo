const { default: mongoose } = require("mongoose");
const { Duration, Consultation } = require("../models");

async function seeder(){
    try {
        const durations = [
            {
                name: '15 Minutes',
                time: 15,
                time_type: 'minutes'
            },
            {
                name: '30 Minutes',
                time: 30,
                time_type: 'minutes'
            },
            {
                name: '45 Minutes',
                time: 45,
                time_type: 'minutes'
            },
            {
                name: '1 Hours',
                time: 1,
                time_type: 'hours'
            }
        ];

        const types = [
            {
                name: 'chat',
            },
            {
                name: 'video call',
            },
            {
                name: 'call',
            },
        ];

        await Duration.insertMany(durations);
        await Consultation.insertMany(types);
        
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}

seeder();
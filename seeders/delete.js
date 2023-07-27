const { default: mongoose } = require("mongoose");
const { Duration, Consultation, SchedulePlan, Schedule, User } = require("../models");

async function undoSeeder(){
    await Duration.deleteMany();
    await Consultation.deleteMany();
    await SchedulePlan.deleteMany();
    await Schedule.deleteMany();
    await User.deleteMany();

    mongoose.disconnect();
}

undoSeeder();
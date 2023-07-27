module.exports = mongoose => {
  const Schedule = mongoose.model(
    "schedules",
    mongoose.Schema({
      user_id: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
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
      schedule_plan_id: {
        type: String,
        required: true
      },
    }, {
      timestamps: true
    })
  );

  return Schedule;
};
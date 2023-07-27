module.exports = (mongoose) => {
  const Duration = mongoose.model(
    "durations",
    mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      time: {
        type: Number,
        required: true
      },
      time_type: {
        type: String,
        required: true
      },
    }, {
      timestamps: true
    })
  );

  return Duration;
};
const mongoose = require('mongoose');
const {
    DB_URI
} = require('../configs/config');

let db = {};

db.mongoose = mongoose;

const connect = () => {
    db.mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch((error) => {
        throw (error)
    });
}

connect();

module.exports = {
    User: require('./user')(db.mongoose),
    Schedule: require('./schedule')(db.mongoose),
    Duration: require('./duration')(db.mongoose),
    Consultation: require('./consultation')(db.mongoose),
    SchedulePlan: require('./schedule_plan')(db.mongoose),
};
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const ip = process.env.IP || 'localhost'
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/error_handler')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// API
app.use(routes);
app.use(errorHandler);

app.listen(port, ip, () => {
    console.log(`PORT IS ALIVE AND IT LISTEN TO PORT http://${ip}:${port}`);
});
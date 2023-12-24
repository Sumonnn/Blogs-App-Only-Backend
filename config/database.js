const mongoose = require('mongoose');

//load config from env file
require('dotenv').config()

const url = process.env.DATABASE_URL;

function database() {
    mongoose
        .connect(url)
        .then(() => console.log("DB connected!"))
        .catch((err) => {
            console.log(err);
            process.exit(1);
        })
};



module.exports = database;
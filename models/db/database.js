const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../../.env` });

const DB = process.env.DATABASE
.replace(
    "<USERNAME>",
    process.env.DATABASE_USERNAME
)
.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

const init = async () => {
    try {
        await mongoose.connect(DB);
        console.log("Successful connection!");
    } catch (err) {
        console.log("Error connecting to Mongo Database:" + err);
    }
};

module.exports = { init };
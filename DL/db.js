const mongoose = require("mongoose")
require("dotenv").config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,
            { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
                if (error) throw error
                console.log(`Connection Success, State`,
                    mongoose.connection.readyState);
            })
    } catch (error) {
        console.log(`Error Mongoose`, error)
    }
}

connect()

module.exports = { connect }

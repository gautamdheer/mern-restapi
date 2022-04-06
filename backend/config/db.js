const mongoose = require('mongoose')    

const connectDB = async () => {

    try {
        const conn = await mongoose.connect("mongodb+srv://gautam1234:gautam1234@gautamclustor.3g4t4.mongodb.net/gautammernapp?retryWrites=true&w=majority")
        console.log(`Mongoose Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}
module.exports = connectDB
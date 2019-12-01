const mongoose = require('mongoose');

mongoose.connection.on('connecting', function () {
    console.log('Mongoose connecting to...');
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', function (err) {
    console.log(`Mongoose connection error:${err}`);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected.');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

connectDB = async () => {
    try {
        let dbUrl = 'mongodb+srv://cluster0-qge0l.mongodb.net/test?retryWrites=true&w=majority'
        let connection = await mongoose.connect(dbUrl,
            {
                user: 'adminUser', // user and pass for mongo db will be retreived from config later...
                pass: 'coldCo5',
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );        

    } catch (error) {
        console.log('error happened in the code of connection to db.', error)
        //handleError(error);
    }
}

module.exports = { connectDB };
const mongoose = require('mongoose');


connectDB = async () => {
    try {
        let x= await mongoose.connect('mongodb://localhost:27017/myDB');
        console.log('x db', x);
    } catch (error) {
        handleError(error);
    }

}

module.exports = {connectDB};
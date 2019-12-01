const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    active: { type: Boolean, required: true },
    roles : { type : Array , "default" : [] }
}, { timestamps: true });

module.exports =  mongoose.model('User', userSchema) ;
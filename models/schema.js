const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    fName : String,
    lName : String,
    username : String,
    password : String,
    roles :[String]
});

const menuItemSchema = new mongoose.Schema({
    name: String,
    available : Boolean,
    price : Number,
    description :String,
    category : String
});

const customerTransactionSchema = new mongoose.Schema({
    contact: String,
    name : String,
    order :[menuItemSchema]
});



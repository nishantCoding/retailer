const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    licenseNo: { type: String, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    active: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema)
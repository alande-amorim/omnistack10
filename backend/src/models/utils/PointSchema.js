const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],     // no Mongo usa-se [ longitude, latitude ]
        required: true,
    }
});

module.exports = PointSchema;
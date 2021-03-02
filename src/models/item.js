"use strict";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item = new Schema ({
    item: String,
    state: Boolean
});

module.exports = mongoose.model('Item', Item);
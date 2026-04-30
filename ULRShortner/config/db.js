const mongoose = require('mongoose');
async function connection(Url) {
    return await mongoose.connect(Url)}
module.exports = connection;
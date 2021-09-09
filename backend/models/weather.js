const mongoose = require('mongoose');
const weatherSchema = mongoose.Schema({


   city:String,
    
})
const city = mongoose.model('city',weatherSchema);
module.exports= city;
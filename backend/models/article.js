const mongoose = require('mongoose');
const articleSchema = mongoose.Schema(
    {

        title:String,
        content:String,
        date:String,
        category:String
    }
)
const article = mongoose.model('article',articleSchema);

module.exports= article;
const mongoose= require('mongoose');
const contactSchema = mongoose.Schema(


    {
        message:String,
        name:String,
        email:String,
        subject:String
    }
)
const contact = mongoose.model('contact',contactSchema);
module.exports= contact;
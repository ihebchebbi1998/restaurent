const mongoose = require('mongoose');
const orderSchema = mongoose.Schema(
    {
        idPlat:String,
        idUser:String,
       
    }
)
const order =mongoose.model('Order',orderSchema) ;
module.exports= order;
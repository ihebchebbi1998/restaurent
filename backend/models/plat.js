const mongoose = require('mongoose');

///creer le model de la base de donnée:
const plastSchema = mongoose.Schema({

    name:String,
    price:Number,
  description:String
});
//// donner un nom a le modele 
const plat = mongoose.model('plat',plastSchema);
// exporter le modele pour etre utilisable dans un autre lieu:
module.exports=plat;

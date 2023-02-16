const mongoose = require('mongoose');

const modelSchema = new  mongoose.Schema({
   
   name: { 
      type: String,
      //required: true
   },
   marca: {
      type: String,
      //required: true
   },
   precio: {
      type: Number,
      //required: true
   },
   stock: {
      type: Number,
      //required: true
   },
   img: {
      type: String
   },
   cloudinary_id: {
      type: String
   },
   categoria:{
      type: String,
      //required: true
   },
   edad_desde: {
      type: Number,
      //required: true
   },
   edad_hasta: {
      type: Number,
      //required: true
   },
   description: {
      type: String,
      //required: true
   },
   Description_long: {
      type: String,
      //required: true
   }
})

const modelo = mongoose.model('productos', modelSchema)

module.exports = modelo
const modelo = require('../models/products.model')
const indexController = {}
indexController.index = async (req, res)=>{
   try {
      const producto = await modelo.find().lean();
      res.render('home', {producto: producto})
   } catch (error) {
      console.log('algo fallo: ', error);
   }
}
module.exports = indexController


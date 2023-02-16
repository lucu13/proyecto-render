const modelo = require('../models/products.model');
homeController = {}
homeController.home = async(req, res)=>{
   try {
      const producto = await modelo.find().lean();
      res.render('home', {producto: producto, layout: false})
   } catch (error) {
      console.log('algo fallo: ', error);
   }
}


module.exports = homeController;
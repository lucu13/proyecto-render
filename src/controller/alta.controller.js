

const altaController = {};


altaController.show = async (req, res)=>{
   res.render('alta', {layout: false})
}
module.exports = altaController;
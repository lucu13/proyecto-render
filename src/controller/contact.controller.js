
const contacController = {};
contacController.contact = (req, res)=>{
   
   res.render('contact', {layout: false}
      )
}

module.exports = contacController;
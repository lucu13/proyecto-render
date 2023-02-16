
const aboutController = {};
aboutController.about = (req, res)=>{
   res.render('about',{layout: false}
      )
}
module.exports = aboutController;
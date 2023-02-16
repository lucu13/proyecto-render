const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path')
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const cors = require('cors');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNET)
.then(()=>{
   console.log('Conexion establecida con Mongo Atlas');
}).catch((error)=>{
   console.log('algo fallo: ', error);
})

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const cloudinary = require('./utils/cloudinary');
const upload = require('./utils/multer');
const modelo = require('./models/products.model')

const routes = require("./routes/index.routes");

app.use( routes );
app.post('/alta', upload.single('image'), async (req, res)=> {
    try {
         const cloud_img = await cloudinary.uploader.upload(req.file.path)
         
         const producto = new modelo(
         {
            id: req.body.id, 
            name: req.body.title,
            marca: req.body.brand,
            precio: req.body.price,
            stock: req.body.stock,
            img: cloud_img.url,
            cloudinary_id: cloud_img.public_id,
            categoria: req.body.category,
            edad_desde: req.body.minAge,
            edad_hasta: req.body.maxAge,
            description: req.body.shortDescription,
            description_long: req.body.longDescription
         });
        await producto.save()
       res.redirect('/')
    } catch (error) {
       console.log('algo fallo ', error);
    }
})
app.delete('/:id', async (req, res)=>{
   try {
      let producto = await modelo.findById(req.params.id);
      await cloudinary.uploader.destroy(producto.cloudinary_id)
      producto.remove()
      res.redirect('/')
   } catch (error) {
      console.log('algo falla en ruta delete: ', error);
   }
})
//static file
let publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
//path.join(__dirname, 'public'); también puede ser una opción
// Para que los archivos estaticos queden disponibles.

const port = process.env.PORT || 4000 
app.listen(port, ()=>{
   console.log('servidor a la espera de conexiones');
})


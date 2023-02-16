

let modalCart = document.querySelector('.modal-cart');
let cartIcon = document.querySelector('#cart');
const sectionCart = document.querySelector('.section-cart');
const closeCart = document.querySelector('#close')


 let cards = 
 [
    {  img: './img/toys/agumon.png',
       name: 'Agumon',
       precio: '1000',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 1,
       cantidad:  0
    },
    {  img: 'img/toys/greymon.png',
       name: 'Greymon',
       precio: '1230',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 2,
       cantidad:  0 
    },
    {  img: 'img/toys/gatomon.png',
       name: 'Gatomon',
       precio: '1120',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.', 
       productId: 3,
       cantidad:  0
    },
    {  img: 'img/toys/wormmon.png',
       name: 'Wormmon',
       precio: '8200',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 4,
       cantidad:  0 
    },
    {  img: 'img/toys/impmon.png',
       name: 'Impmon',
       precio: '1120',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 5,
       cantidad:  0 
    },
    {  img: 'img/toys/palmon.png',
       name: 'Palmon',
       precio: '1100',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 6,
       cantidad:  0 
    },
    {  img: 'img/toys/patamon.png',
       name: 'Patamon',
       precio: '6000',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 7,
       cantidad:  0 
    },
    {  img: 'img/toys/renamon.png',
       name: 'Renamon',
       precio: '1500',
       description: 'loremipsExercitation esse Lorem eu do aute adipisicing.',
       productId: 8,
       cantidad:  0 
    }
 ]
let cart = [];

let links = document.querySelectorAll('.nav-link');
links.forEach(link => {
 link.addEventListener('click', (e)=>{
   e.preventDefault();
   document.cookie = 'token=navigation'
   console.log(sessionStorage);
   const url =  e.target.pathname;
   fetch(url)
      .then(res => res.text())
      .then(data =>{
         console.log(data);
         const mainContent = document.getElementById('main-content');
         mainContent.innerHTML = '';
         mainContent.innerHTML = data;
      })
      .catch(error => console.log(error))
   //loadContent(url);

   /*async function loadContent(url) {
      const response = await fetch(url);
      const data = await response.text();
    
      const mainContent = document.getElementById('main-content');
      mainContent.innerHTML = data;
    }*/
  
 })
})

const notification  = document.querySelector('#notification');

let count = 0;

let aggToCart = document.querySelectorAll('.link-cart');
aggToCart.forEach((link)=>{
   link.addEventListener('click', (e)=>{
      e.currentTarget;
      count++;
      notification.style.display = 'block';
      notification.innerHTML = count
      cards.forEach((card)=>{
         let id = link.dataset.productid;
         if (card.productId == id){
             let existeProducto = false;
             if (cart.length == 0){
               card.cantidad = 1;
               cart.push(card)
             } else { cart.forEach((producto) =>{
               if(producto.productId == id ){
                  producto.cantidad++;
                  existeProducto = true
               }})
               if(!existeProducto){
                  card.cantidad = 1
                  cart.push(card)
                  console.log(cart);
                  if(card.cantidad == 0){
                     cart.shift(card)
                  }
               }}
               let template = ''
               cart.forEach((elemento)=>{
                  template += 
               `<div class="productOfCart">
                  <h2>${elemento.name}<h2>
                  <div class="cartImg">
                     <img src='${elemento.img}'>
                     <div class="descriptionCart">
                        <p>${elemento.description}</p>
                           <div class="cantidad">
                              <button>-</button>
                                 Cnt. ${elemento.cantidad}
                              <button>+</button>
                           </div>
                        <h4>Precio:<span> ${elemento.precio} </span>US</h4>
                     </div>
                  </div>
                  
               </div>`
               
               })
               modalCart.innerHTML = template
            }
         });
         
      });
     
   })



cartIcon.addEventListener('click', ()=>{
   sectionCart.style.display = 'block'
})

closeCart.addEventListener('click',()=>{
   sectionCart.style.display = 'none'
})

   




const { log } = require('console')

const fs= require('fs');

const { json } = require('stream/consumers');

class ProductManager{

    constructor(){
        this.path= "./productos.json";
        this.products = [];
    }

    static id=0
    addProduct = async (title, description, price, thumbmail, code, stock)=>{
        ProductManager.id++
        let product = {title, description, price, thumbmail, code, stock, id:ProductManager.id};
        this.products.push(product);
    
        await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    }
    


    getProduct = async()=>{
        let leer =  await fs.promises.readFile(this.path,'utf-8');

        console.log(JSON.parse(leer));

    }

    getProductById= async (id)=> {
        let leer =  await fs.promises.readFile(this.path,'utf-8');
        let respuesta = JSON.parse(leer);

        if(!respuesta.find(product => product.id === id)){
            console.log('el producto no fue encontrado')

        }else{
        let leerById = respuesta.find(product => product.id === id);
        console.log(leerById);}
    }

    deleteProductById= async (id)=>{

        let leer =  await fs.promises.readFile(this.path,'utf-8');
        let respuesta = JSON.parse(leer);
        let filterProduct = respuesta.filter(product => product.id != id)
       

        /*console.log(filterProduct);*/

        await fs.promises.writeFile(this.path, JSON.stringify(filterProduct))
    }
    
    updateProduct=async({id, ...productos})=>{
        await this.deleteProductById(id)
        let leer =  await fs.promises.readFile(this.path,'utf-8');
        let prodSinModif = JSON.parse(leer);
        let prodModif = [{...productos, id},...prodSinModif];
        await fs.promises.writeFile(this.path, JSON.stringify(prodModif))

    }  
}

 const productos = new ProductManager();


 /*console.log(productos.getProduct());

 productos.addProduct('pizza grande normal','pizza que contiene solo con mozzarela',1000,'img.com','pizza1',30)
 productos.addProduct('pizza grande de peperoni','pizza que contine pedacitos de peperoni encima del queso',1500,'img2.com','pizza2',10)

 console.log(productos.getProduct());

 console.log(productos.getProductById(2));

 console.log(productos.getProductById(3)); */
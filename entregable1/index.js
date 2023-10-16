class ProductManager{
    constructor(){
        this.products=[]
    
    }
    static id=0
    addProduct(title, description, price, thumbmail, code, stock){
        ProductManager.id++
        this.products.push({title, description, price, thumbmail, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products
    }

    getProductById(id){
        if(!this.products.find((product)=> product.id === id)){
            return 'Not Found'
        }else{
            return this.products.find((product)=> product.id === id)
        }
    }
}
 const productos = new ProductManager();

 console.log(productos.getProduct());

 productos.addProduct('pizza grande normal','pizza que contiene solo con mozzarela',1000,'img.com','pizza1',30)
 productos.addProduct('pizza grande de peperoni','pizza que contine pedacitos de peperoni encima del queso',1500,'img2.com','pizza2',10)

 console.log(productos.getProduct());

 console.log(productos.getProductById(2));

 console.log(productos.getProductById(3));
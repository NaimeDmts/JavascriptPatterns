var singleton = (function(){

    var instance;

    function ProductController(){
        const products =[
            {name:'Product 1'},
            {name:'Product 2'},
            {name:'Product 3'}
        ];

        const add = function(product){
            products.push(product);
        }

        const get = function(product){
            return products;
        }

        return {
            add, get
        }
    }

    return{
        getInstance : function(){
            if(!instance){
                instance = new ProductController();
            }
            return instance;
        }
    }
})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

productController1.add({name:'Product 4'});
console.log(productController2.get())

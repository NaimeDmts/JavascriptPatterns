
const products = [
    {name:'General Mobile 20 pro', price:3000},
    {name:'General Mobile 21 pro', price:5000},
    {name:'General Mobile 22 pro', price:8000}
];

var ProductController = (function(data){

    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index>=0){
            collections.splice(index, 1);
        }
    }

    const getProduct = function (product){
        return collections;
    }

    return{
        addProduct,
        removeProduct,
        getProduct
    }
})(products);


ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);
ProductController.addProduct(products[2]);
ProductController.removeProduct(products[0]);

console.log(ProductController.getProduct());

//Module Extenting
var extended = (function(m){

    m.sayHello = function(){
        console.log('hello from extended module');
    }

    return m;

})(ProductController);

extended.sayHello();
console.log(extended.getProduct());
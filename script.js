// 1-) Global varibale naming conflicts

//script.js
var name = 'Naime';

//app.js
var name ='Damataşı';

console.log(name);

// 2-) Encapsulation

var Counter ={
    number: 0,
    increment: function(){
        return ++this.number;
    },
    decrement: function(){
        return --this.number;
    }

}
console.log(Counter.increment());
console.log(Counter.increment());
Counter.number = 10;
console.log(Counter.decrement());

// IIFE(Immediately Invoked Function Expressions)

//script.js
(function(){
    var user ='Naime';
    console.log(user);
})();

//app.js
(function(){
    var user ="Damataşı";
    console.log(user);
})();

(function(){
    // private members

    let numbers =0;

    let increment = function(){
        return ++numbers;
    }
    console.log(increment())

    return{
        //puplic members
    }
})();

var Module = (function(){
    // private members

    let numbers =0;

    let increment = function(){
        return ++numbers;
    }
    let decrement = function(){
        return --this.number;
    }
    return{
        //puplic members
        increment,
        decrement
    }
})();

// console.log(Model.increment())
// console.log(Model.decrement())

var Moduls = (function(){
    var privateMethod = function(){

    };

    return{
        publicMethod : function(){

        }
    }
})();

console.log(Moduls.publicMethod())


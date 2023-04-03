var singleton = (function(){

    var instance;

    const createInstance = function(){
        return {
            randomNumber : Math.random()
        }
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = new createInstance();
            }
            return instance;
        }
    }

})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1.randomNumber, instance2.randomNumber)

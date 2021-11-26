/*const IphoneX = {
    name: 'Iphone X',
    color: 'silver',
    weight: 200,
    takePhote(){
        console.log("Take a photo");
    },
    objectChild:{
        name: 'Child Object',
        methodChild(){
            console.log(this);
        }
    }
}

IphoneX.objectChild.methodChild()
//This keyword referce to the object stand before '.' symbol.
//         (referce to the object to the method)*/

//console.log(this); // return Object window


//'This' outside method, 'this' references to the global object 

function Car(name,color) {
    this.name = name
    this.color = color
}

Car.prototype.run = function(){
    //Context
    const test = () =>{
        console.log(this);
    }
    //With arrow function, it can not create its own context
    //-> heritate 'nearest' this 
    test()
}

const porsche = new Car('porsche','yellow')

console.log(porsche);

porsche.run() // log: Window object
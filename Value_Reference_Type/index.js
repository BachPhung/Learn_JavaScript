/*const a = {
    name:'BMW'
}
let b = a;
b.name = "Mercedes"
console.log(a.name);*/

/*let a = {} // a memory is allocated
a = {}     // a memory is allocated -> there are 2*/

/*const obj = {
    child: { x: 18 }
}

let z = obj.child

z = { x: 25 }

console.log(obj.child.x)*/

function createCar(obj){
    //obj = JSON.parse(JSON.stringify(obj)); // create new object
    // This is a way that is optimal for object have small object attribute
    
    /*Second way*/
    //obj={...obj}// create new object
    // This is a way that is optimal for object have no small object attributes
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}

const newCar = createCar(car)
console.log(car);
console.log(newCar);

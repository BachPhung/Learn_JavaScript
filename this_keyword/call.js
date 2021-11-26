/*const teacher = {
    firstName: 'Hello',
    lastName: 'World',
}

this.firstName = 'Tome'
this.lastName = 'Cruise'
function showFullName(){
    console.log(`${this.firstName} ${this.lastName}`);
}
const me = {
    firstName: 'Bach',
    lastName: 'Phung',
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.getFullName.call(teacher)

showFullName.call(this)*/

/*
Inheritance by using call
function Animal(name,weight){
    this.name = name
    this.weight=weight
}

function Dragon(name,weight,age){
    this.age = age
    Animal.call(this,name,weight)
}

const bachPhung = new Dragon('Bach Phung', 60,21)
console.log(bachPhung);*/

function logger(){
    const arr = Array.prototype.slice.call(arguments)
    console.log(arr);
}

logger(1,2,3,4)
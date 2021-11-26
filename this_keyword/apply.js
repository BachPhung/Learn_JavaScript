/*const teacher ={
    firstName: 'Son',
    lastName: 'Dang',
    isOnline: false,
    goOnline(){
        this.isOnline = true,
        console.log(`${this.firstName} ${this.lastName} is Online`);
    },
    goOffline(){
        this.isOnline = false,
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    }
}

const me = {
    firstName: 'Bach',
    lastName: 'Phung',
    isOnline: false
}

teacher.goOnline()

teacher.goOnline.apply(me)*/

function Animal(name,weight){
    this.name = name
    this.weight = weight
}

function Parrot(){
    Animal.apply(this,arguments),
     this.speak = function(){
        console.log("Hello homies");
    }
}

const par = new Parrot('Vẹt', 100)
console.log(par);
par.speak()
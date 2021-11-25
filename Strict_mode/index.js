"use strict"

/*fullName = "Bach Phung"

function testFunc() {
    "use strict"        //use strict is only applied testFunc()
   var age = 21
}

//console.log(fullName);
console.log(age);  //ReferenceError: age is not defined*/

/*const student = Object.freeze({
    fullName: 'Bach Phung'
})

student.fullName = 'Phung Bach'

console.log(student);*/

/*const student = {}

Object.defineProperty(student, 'fullName', {
    value: 'Bach',
    writable: false // this is default value
})

console.log(student)*/

/*
{
    function sum(a,b){
        return a+b
    }
}

console.log(sum(2,3));  // sum is not defined
*/

/*
const private = 123;
console.log(private); // unexpected strict mode reserved word
*/
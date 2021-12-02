/**
 * 1: Define key: value for object
 * 2: Define method for object
 * 3: Define key for object under variable type
 */

var name = 'Javascript'
var price = 1000;

// var course ={
//     name,
//     price,
//     getName(){
//         return this.name
//     }
// }

// console.log(course.getName());

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000
}

console.log(course);
// function Course(name,price){
//     this.name = name;
//     this.price = price;
// }

class Course{
    constructor(name,price){
        this.name = name;
        this.price = price
    }
}
const phpCourse = new Course('PHP',1000);
const JSCourse = new Course('JavaScript',1500);

console.log(phpCourse);
console.log(JSCourse);
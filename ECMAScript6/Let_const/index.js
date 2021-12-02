/**
 * 1. Var / Let, Const: Scope, Hoisting
 * 2. Const / Var, Let: Assignment
 * 
 * //Colde block: if else, loop, {}, ...
 */

// {
//     var course = 'JavaScript basic!';
//     {
//         {
//             const a = 'Javascript';
//             console.log(a);
//         }
//     }
// }

// console.log(course);

a = 100;
var a;
console.log(a);

const b = 1;
b = 2;
console.log(b);

let c = 3;
c = 4;
console.log(c); 


/*console.log(age);  //undefined
console.log(fullName);  //Reference Error
var age = 19;*/

//Hoisting with var: declaration is moved to top but assignmnet is not.


/*console.log(sum(6,7));

function sum(a,b){
    return a+b;
}
*/

//Hoisting with function: declaration is moved to top but assignmnet is not.

/*console.log(fullName);  // ReferenceError: cannot access
let fullName= "Bach Phung"*/
 
//Hoisting with let,const: declaration is moved to top but its value is not
//initialized, and is put into 'Temporal Dead Zone'

{
    let fullName='Bach Phung'
    let a = function(){
        let fullName='Phung Bach'
        console.log(fullName);
        //let fullName='Phung Bach' //ReferenceError: cannot access
    }
    a();
}
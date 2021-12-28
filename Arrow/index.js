/**
 * Arrow function
 */

const logger = (log) => {
    console.log(log);
}
//there is no binding of this keyword
logger('Bach Phung')

const course = {
    name:'JavaScript basic!',
    getName: () => {    //can not use this keyword in arrow function because it doesn't 
        return this.name//context 
    }
}

console.log(course.getName());
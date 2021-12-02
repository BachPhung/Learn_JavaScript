/**
 * JSON:
 * - is a lightweight data-interchange format 
 * - JavaScript Object Notation
 * - JSON: Number, Boolean, Null, Array, Object
 * 
 * Encode/Decode
 * Stringify / Parse
 */

// var json = '["Javascript", "PHP"]'
// var json = '{"name":"Bach Phung","age":21}'

/**
 * Promise:
 *  - was born to process asynchronous actions
 *  - before the born of promise, we have to use callback, this sometimes lead to callback hell
 *  - is an object that may produce a single value sometime in the future
 *    either a resolved value or rejected value
 * Sync
 * Async: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request 
 *        animation frame
 * 
 * Callback hell
 * Pyramid of doom
 * 
 * State:
 * Pending
 * Fulfilled
 * Rejected
 */



// var promise = new Promise(
//     //Executor
//     function(resolve, reject){
//         //Logic
//         //Success: resolve()
//         //Reject : reject()
//         resolve(1)
//     }
// )

// promise
    // .then(function(){
    //     return new Promise(function(resolve){
    //         setTimeout(function(){
    //             resolve([1,2,3])
    //         },1000)
    //     })
    // })
    // .then((data)=>{
    //     console.log(data);
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    // .catch(function(){
    //     console.log('Fail');
    // }) 
    // .finally(function(){
    //     console.log('Done');
    // })

//Promise (chain)

// function sleep(ms){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms)
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(1000)
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000)
//     })
//     .then(function(){
//         console.log(4);
//         return sleep(1000)
//     })
//     .catch(function(){
//         console.log('Fail');
//     })


// Promise.resolve
// Promise.reject
// Promise.all

// var promise1 = new Promise(function(resolve,reject){
//     setTimeout(resolve([1]),2000)
// })

// var promise2 = new Promise(function(resolve,reject){
//     setTimeout(resolve([2,3]),5000)
// })

// Promise.all([promise1,promise2]).then(function(result){
//     console.log(result);
// })

// var users = [
//     {
//         id:1,
//         name:'Bach Phung'
//     },
//     {
//         id:2,
//         name:'Hello World'
//     }
// ]

// var comments = [
//     {
//         id:1,
//         user_id:1,
//         content:'Video'
//     },
//     {
//         id:2,
//         user_id:2,
//         content:'Music'
//     }
// ]

// function getContents(input){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(input)
//         },1000)
//     })
// }

// var a = [];
// var b = [];
// getContents(comments).then(function(result){
//     a = result
//     //console.log(result);
// })

// getContents(users).then(function(result){
//     //console.log(result);
//     b = result
// })

// console.log(a,b);


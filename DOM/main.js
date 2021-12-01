//HTML DOM (Document Obect Model) is a standard for how to change, update, delete HTML

//have 3 properties:

/**
 * 1: Element
 * 2: Attribute
 * 3: Text
 */

//-----------------------

//Javascript
// document.querySelector('div').onclick = function(e){
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function(e){
//     e.stopPropagation()
//     console.log('Click me')
// }

var btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    console.log('Hello World');
})


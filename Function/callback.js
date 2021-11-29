//  function myFunction(param){
//      param('Learn Javascript')
//  }

//  function myCallbackFuntion(value){
//      console.log('Value: ',value);
//  }

//  myFunction(myCallbackFuntion)

var courses =[
    'Javascript',
    'PHP',
    'Ruby'
]

Array.prototype.map2 = function(callback){
    var output = []
    var arrayLength = this.length
    for(var i=0;i< arrayLength;++i){
        var result = callback(this[i],i);
        output.push(result)
    }
    return output
}

// var htmls = courses.map(item=>{
//     return `<h2>${item}</h2>`
// })

var htmls = courses.map2(function(course,index){
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''));



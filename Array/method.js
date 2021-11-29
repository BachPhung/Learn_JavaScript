var courses = [
    {
        id:1,
        name:'Javascript',
        coin:250
    },
    {
        id:2,
        name:'Java',
        coin:270
    },
    {
        id:3,
        name:'Ruby',
        coin:20
    },
    {
        id:4,
        name:'Ruby',
        coin:20
    }
]

// courses.forEach(course =>{
//     console.log(course);
// })

// var isFree = courses.every(course =>{
//     return course.coin >= 0
// })
// var isFree = courses.some(course =>{
//     return course.coin >= 0
// })

// var course = courses.find(course =>{
//     return course.name =='Ruby'
// })
// var course_all = courses.filter(course =>{
//     return course.name =='Ruby'
// })
// console.log(course_all);

// var newCourses = courses.map(course=>{
//     course.name += ' added'
//     return course
// })

// console.log(newCourses);
// var i =0;
// var totalCoin = courses.reduce((accumulator,currentValue,currentIndex,currentArray)=>{
//     i++
//     console.log(currentIndex);
//     console.log(currentArray);
//     return accumulator + currentValue.coin
// },0)

// console.log(totalCoin);

// Array.prototype.reduce2 = function (f, result) {
//     var i = 0;
//     if (arguments.length < 2) {
//       i = 1;
//       result = this[0];
//     }
//     for(; i < this.length; i++) {
//       result = f(result, this[i], i, this);
//     }
//     return result;
//   };

//Flat Array
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];

// var flatArray = depthArray.reduce((flatOutput,index)=>{
//     return flatOutput.concat(index)
// },[])

// console.log(flatArray);


var arr = ['Javascript', 'PHP', 'NodeJS', 'C++']

var [a,b,c] = arr
console.log(a,b,c);

var course = {
    name:'Javascript',
    price:1000,
    image: 'image-address'
}

var {name,price}=course
console.log(name,price);

var{...rest} = course;
console.log(rest);
// const sayHello = function(){
//     console.log('Hello'); // one line function si console
// };



// const sayHello = () => {
//     console.log('Hello');
// }

//One line function does not need braces
// const sayHello = () => console.log('Hello');

// sayHello();

//one line returns 
// const sayHello = () => 'hello';

// //same as above
// // const sayHello = function(){
// //     return 'Hello';
// // }

// console.log(sayHello());

//return object
// const sayHello = () => ({msg: 'Hello'});

// console.log(sayHello());

//single parameters does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Vine');

//multple parameters need parentheses
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Vine', 'Garcia');


const users = ['Nathan', 'John', 'William'];
//map is the high ordered array function
// const nameLengths = users.map(function(name){
//     return name.length
// });

//     console.log(nameLengths);

//shorter way
    // const nameLengths = users.map((name) => {
    //     return name.length
    // });

    // console.log(nameLengths);

//shortest way
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
    

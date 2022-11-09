// function declearation -------------------------------------------------
function Learn(abc) {}
const Learn = function (abc) {};
const Learn = (abc) => {}; // arrow function



// import export-------------------------------------------------
// index.js
export default Learn;
export NewLearn;

// app.js
import anyName from './file';
import {NewLearn as newName} from './file';



// spread operator ---------------------------------- variable,object,..---------------
const numbers = [1,2,3]
const newNumber = [...Number,4,5,6] // O/P = 1 2 3 4 5 6

// rest operator ---------------------------------- ...argument can receive unlimited argument. ---------------
const abc = (...argument)=>{}
abc(1,2,3)


// Destructuring ----------------------------------  ---------------
const course = {
    name:'React course',
    details:{
        price:'200 tk',
        duration:'2 hour'
    }
};
// extract the 'name' of course and 'price'
const {name} = course;
const {details:{price}} = course; // find price value
const {details:{price} = {}} = course; // set default value null {} if there is no Details->price
const {details:{price = '0.0 tk'}} = course; // set default value price.

// Array method ----------------------------------  ---------------
// filter
numbers = [1,2,3,4,5];
const fil = numbers.filter((num)=>{num>2}); //filter() will receive another function ex: ()=>{} arrow function = 3,4,5

// find
const find = numbers.find((num)=>{num>2}); // find return first element only '3' 

// find index
const findindex = numbers.findIndex((num)=>{num>2}); // findIndex return first element index only '2' 

//  slice
const slice = numbers.slice(2,4); // slice return middle element of start and end index = 3,4 

//  concate
const concate = numbers.concat(6,7,8); // concate return = 1,2,3,4,5,6,7,8

//  splice will change main array
const splice = numbers.splice(1,2,400,800); // splice (start, numOfDelete, newdata) --> return delete element and main array will change.

//  push wiil change main array
numbers.push(44,55); 

// map
numbers.map((num)=>{ //2,4,6,8,10
    return num*2;
})

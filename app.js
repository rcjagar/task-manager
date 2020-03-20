
///  chapter -5 


//EX-1
/// constructors and 'this' key word 

// for only singlr instance of data

// const name ={
//     firstname: 'rc jagar',
//     age:30
// }


// console.log(name);




/// using constructor for multiple instances or multiplle objects

function Person(name, age, dob){
    this.name = name;
    this.age = 30;
    this.birthday = new Date(dob);
    this.calAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    
    }
}

const chai = new Person('rc jagar the lion',30, '11-06-1980');

console.log(chai.calAge());


////EX-2
// built in constructor 


//strings

const name1 = 'jesff';

const name2 = new String ('jesff');

name2.foo = 'rc jager the lion';


if(name1 === 'jesff'){
    console.log('yes you are right ');
} 
    else{
        console.log('no this is not right');
    }
console.log(name1);
console.log(name2);

//numbers

const num1 = 5;
const num2 = new Number(10);

num2.foo = 40;

console.log(num1);

console.log(num2);



//// Boolean 

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);

console.log(bool2);



/// functions

const getSum1 = function(x, y){
    return x+y;
}

console.log(getSum1(1,2));


const getSum2 = new Function('x', 'y', 'return 34 +4');
console.log(getSum2());

/// object


const obj1 ={
    name: "chaitanya",
    age: 20
};

const obj2 = new Object({name:"rc jagar", age: 30});
obj2.foo ="tim";

console.log(obj1);
console.log(obj2);


//// array

const arr1 = [1,2,2,3,45];
const arr2 = new Array(23,34,45);

console.log(arr1);
console.log(arr2);



////regular expresions 

const reg1 = "\/+w+/";
console.log(reg1);

var example1="123";
var example2=123;

var addition=example1+example2;

console.log(addition);


if(example1===example2){
    console.log(true);
}
else{
    console.log(false);
}

let x="Hi";



function new1(){
    let x="Hello";
        console.log(x);
}
new1();
console.log(x);

var car={
    type: {small: "sedan", big: "suv", medium: "jeep"},
    model:"v4",
    color:"black",
    fuelType:"gas",
}

car.type.medium="truck";

console.log(car.type.medium);

const arr=[1,2,3,4];

arr.push(5);
arr.push(6);

console.log(arr);


var str="welcome";
var str1="the";


var batch=`Hello, ${str} to ${str1} class`;
console.log(batch);

var numberList={}

var alphabets=["a","b","c","d","e","f","g","h"];

for(var i=0;i<alphabets.length;i++){
   console.log(alphabets[i]+ ":" + i);
}

/*
create a object about your profile  
First name,last name, DOB, hobbies should array with object sport type, acheivements, ,


display last hobbies in console.log and your display avatar or image in the page.


with height 250px and width 250px and cricle image

with minimum 10 fields 

own photo in assets folder



*/
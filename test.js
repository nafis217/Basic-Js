// let a = "nafis";
// console.log('ok');

// let a = 2;
// let b = 3;
// console.log(a);
// console.log(a += b);
// console.log(a -= b);
// console.log(a *= b);
// console.log(a /= b);
// console.log(a %= b);
// console.log(a **= b);
// console.log(a);

// leftshift operator 
// let a = 2;
// console.log(a >> 1);

// bitwise AND operator
//  let a = 2;
//  let b = 3;
//  console.log(a & b);

// comparison operator 

// let x = 2;
// let y = '2';
// console.log(x == y); 
// console.log(x === y); 

//inequaliyt operator 
// function myfunction(){
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");

// }

// myfunction();

// if else 

    // let a = 2;
    // let b =3;
    // if(a<b){
    //     console.log("Print my name is nafis ")
    // }else{
    //     console.log("print my name is safayet")
    // }

    // let i = 20;
    // if (i == 10) 
    //     console.log("i is 10");
    // else if (i == 15)
    //     console.log("i am 15");
    // else if (i == 20)
    //     console.log("i am 20");
    // else
    //     console.log("i am not present");

    //javascript switch case

    // switch case

    // let day  = "onday";

    // switch (day) {
    //     case "saturday":
    //         console.log("today is saturday");
    //         break;
    //     case "sunday":
    //         console.log("today is sunday");
    //             break;
    //             case "monday":
    //                 console.log("today is monday");
    //                 break;
    //     default:
    //         console.log("not a valid day");
    //         break;
    // }

    //javascript break statement


    // let i = 1;
    // do{
    //     console.log(i);
    //     if(i == 20){
    //         break;
    //     }
    //     i++;
    // }while(i<=30);

//     js continue statement

//    for (let i =1; i<=10; i++){
//        if(i == 5){
//            continue;
//        }
//        console.log(i);
//    }

// return

// function calculation(x,y){
//     console.log( )
// }

//loops in js 

// for (let i = 0; i <= 5; i++) {
//     console.log("hello world");
// }

// do while loop

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// const obj={
//     name:"nafis",
//     age:23
// }
// for(let key in obj){
//     console.log(key, ":", obj[key]);
// }

//Statement 3: Updating Counter Variable

// const subject=["math", "biology","english","bangla"]
// let i = 0;
// let len = 4;
// let gfg = "";
// for (; i<len;){
//     gfg += subject[i];
//     i++;
// }
// console.log(gfg)

//JavaScript  do While Loop

// let count = 1;
// do{
//     console.log(count)
//     count++;
// }while(count<=5);

// const car={
//     name:"ford",
//     model:"mustang",
//     color:"red"
// }
// for(let key in car){
//     console.log(` ${car[key]}` );
// }

// for .. of 

// Iterating Over an Object’s Properties using for...of

// let person = {
//     name:"nafis",
//     age:23,
//     hobby:"coding"
// };

// for (let key of Object.keys(person)){
//     console.log(`${key}: ${person[key]}`);
// }

// function expression

// function sum (a, b){
//     return a + b;
// }
// console.log(sum(2,3));

//

// function welcomeMsg(name){
//     return("hello " + name + " welcome to clicko");
// }
// console.log(welcomeMsg("nafis"));

//
// let employee = {
//     details: function(designation, experience){
//         return this.name
//         + " "  + this.id + " " + designation + " " + experience;
//     }       
// }
// let emp1 = {
//     name: "nafis",
//     id: 23
// }
// let emp2 = {
//     name: "safayet",
//     id: 24
// }

// console.log(employee.details.call(emp1, "developer", "2 years"));
// console.log(employee.details.call(emp2, "designer", "3 years"));

// function calc(a,b=2){
//     return(2*(a+b));
// }
// console.log(calc(2));

// const add = function(a,b){
//     return a + b;
// };

// const add = (a,b) => {
//     return a + b;   
// }
// add(2,3)

// const add2 = (a,b) => a + b;
// add2(2,3)

// neasted function
// function outer(){
//     console.log('outer function');
//     function inner(){
//         console.log('inner function');
//     }
//     inner();
// }

// function outer(x){
//     function inner(y){
//         return x+y;
//     }
//     return inner;
// }
// let add5 = outer(5);
// let add10 = outer(10);
// console.log(add5(2));
// console.log(add10(2)); 

// function num(n,callback){
//     return callback(n);
// }
// const double = (n) => n*2;
// console.log(num(5,diuble));

// function num(a,b){
//     add = a + b;
//     return add;
// }
// console.log(num(2,3));

// function greet (name,callback){
//     console.log("hello" +  " " + name);
//     callback();
// }
// function callMe(){
//     console.log("i am callback function");
// }
// greet("nafis", callMe) 

// console.log("start");
// setTimeout(() => {
//     console.log("i am inside settimeout function");
// }, 2000);
// console.log("end");

// setTimeout(function() {
//     console.log("i am inside settimeout function");
// }, 3000);

// Nested Functions
// function outerFunction(x) {
//     function innerFunction(y) {
//         return x + y;
//     }
//     return innerFunction;
// }
// const add10 = outerFunction(10);
// console.log(add10(5)); 

//array methods
// let arr = [1,2,3,4,5];
// let result=arr.map((num) => { 
//     return num * 2;
// });
// console.log(result)

// let a =[1,2,3,4,5];
// a.push(6);
// a.unshift("web development");
// console.log(a);


// const a = [1,2,3,4,5];
// console.log("original array:" + a);

// let lst=a.pop();
// console.log("after pop:" + a);
// console.log("popped element:" + lst);

// let fst=a.shift();
// console.log("after shift:" + a);
// console.log("shifted element:" + fst);

// a.splice(2,0,"nafis");
// console.log("after splice:" + a);

// let a =["html","css","js"];
// let len=a.length;
// console.log("length of array:" + len);

// let a = ["HTML", "CSS", "JS"];
// a.length = 7;

// console.log(a);
// a.length = 2;
// console.log(a);

//iterating through an array
// let a = ["html", "css", "js", "react"];
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// let a = [1,2,3,4,5];
// let b =[6,7,8,9,10];
// let c = a.concat(b);
// console.log(c);

// array filter

// let number = [1,2,3,4,5,6,7,8,9,10];
// var result = number.filter((currentValue,index,arr) => {
//     return currentValue > 5;
// });
// console.log(result);


// var a = [1,2,3,4,5,6,7,8,9,10];
// var result = 0;
// a.forEach((currentValue) => {
//     result += currentValue * 2;
// });
// console.log(result);

// let arr=[1,2,3,4,5];
// let a = arr.forEach((value) => value + 2 );
// return a;
// console.log(a);

// filter method 
// let arr=[1,2,3,4,5];
// let a =arr.filter((value) => value > 2);
// console.log(a);

//reduce method

// let arr=[1,2,3,5,2,1];
// let add2 = ((nafis ,safayet) => nafis + safayet);

// 
// {
//     "friends": [
//         {
//             "name": "nafis",
//             "age": 23
//         },
//         {
//             "name": "safayet",
//             "age": 24
//         },
//         "hobbies": [
//             "coding",
//             "travelling",
//             "gaming"
//         ]
//     }
//     "family": [
//         {
//             member1: "father",
//             member2: "mother",
//             member3: "sister"
//         }
//     ]
//     "address": {
//         "city": "dhaka",
//         "country": "bangladesh"
//     }
// } 


// myJson = `{
// "name": "nafis",
// "age": 23,
// "friends": ["safayet"],
// "family": ["father", "mother", "sister"],
// "address": {
//     "city": "dhaka",
//     "country": "bangladesh"
// }
// }`;

// Obj={ name: "nafis", age: 23, job: "developer", country:"Bangladesh" }
// console.log(Obj);

// const json = JSON.stringify(Obj);
// console.log(json);

// var javascript = { 
//     name: "JavaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printlibraries: function() {
//         this.libraries.forEach((library) => {
//             console.log(`${this.name} loves ${library}`);
//         });
//     }       
// }
// javascript.printlibraries();
// NaN undifined 0 null false ""
// var myNum = undefined;
// if (myNum) {
//     console.log("this is true");
// }else{
//     console.log("this is false");
// }

// ternary operator
// var age = 2 ;
// var type = (age >= 18) ? "adult" : (age < 10) ? "child" : "teenager";
// console.log(type);

// array.prpototype.find()

// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.find((currentValue,currentIndex,array) => {
//     return currentIndex > 2;
// });
// console.log(result);

// findIndex
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.findIndex((currentValue,currentIndex,array) => {
//     return currentValue > 6;
// });
// console.log(result);


//slice method
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.slice(-5,-1);
// console.log(result);

//splice method

// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.splice(5, 0, "nafis", "safayet");
// console.log(arr);
// console.log(result);

// concat method

// var arr = [1,2,3,4,5];
// var arr2 = [6,7,8,9,10];
// var result = arr.concat(arr2);
// console.log(result);

// push method 

// var num = [1,2,3,4,5];
// var result = num.push([7,8,9,10,11,12,13,14,15]);
// console.log(num);

//map method

// var arr = [1,2,3,4,5];
// var result = arr.map((val) => val*2);
// console.log(result);

// var num = [1,2,3,4,5];
// num.push(6);
// console.log(num);

// array reduce method

// var arr = [1,2,3,4,5];
// var result = arr.reduce((previousValue,currentValue) => previousValue + currentValue
// return result;
// );
// console.log(result);

// var number = [1,2,3,4,5];
// var sum = number.reduce((previousValue,currentValue) => previousValue + currentValue);
// console.log(sum);

//for loop 
// let i = 1;
// for (; ; i++) {
//     if (i > 10) {
//         break;
//     }   
//     console.log(i);
// }

// const arr = [1,2,3,4,5];
// for (element in arr) {
//     console.log(element);
// }

// var myObj = {
//     name: "nafis",
//     age: 23,
//     hobby: "coding"
// };

// var keys = Object.keys(myObj);
// var values = Object.values(myObj);
// var entries = Object.entries(myObj);

// console.log(keys);
// console.log(values);
// console.log(entries);

// function myFunction(a = 10){
//     return a;
// }
// console.log(myFunction(undefined));

//spread operator
// var numbers = [1,2,3,4,5]
// var newNumbers = [...numbers, 6,7,8,9,10];
// console.log(newNumbers);

//  function getData(dataId){
//     setTimeout(()=> {
//         console.log("data id is: " + dataId);   
//     }, 2000);
//  }

// let promise = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     reject(true)
// })

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("data fetched successfully");
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}
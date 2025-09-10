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


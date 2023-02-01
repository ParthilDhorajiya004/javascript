


//Hoisting ============================================


//function

// calAge(1965);    

// function calAge(year){
//     console.log(2016-year);
// }

// calAge(1956);   


// //retirement(1956);
// //retirement(1956);  //Showing Error for function not defiend first
// var retirement = function(year){
//     console.log(65-(2016-year));
// }

// retirement(1965);

// //variable

// console.log(age);  //Showing undefined 
// var age=23;

// function foo()
// {
//     console.log(age);
//     var age=65;
//     console.log(age);
// }

// foo();              //O/P 65 inside value
// console.log(age);   //O/P 23 outside value



// Scoping=============================================================


//First scoping example

// var a= "Hello";
// first();

// function first()
// {
//     var b="Hi!";
//     second();

//     function second()
//     {
//         var c="Hey!";
//         console.log(a+b+c);
//         third();      //error for not define c in third function
//     }
// }

// function third()
// {
//     var d="John";
//     console.log(a+d);
//     console.log(c);  
// }

//The This Keyword=============================================================

// console.log(this);

// calAge(1985);

// function calAge(year){

//         console.log(2016-year);
//         console.log(this);
// }

var john = {
    name:"John",
    yearOfBirth:1990,
    calAge:function(){
        console.log(this);
        console.log(2016-this.yearOfBirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
};

john.calAge();

var mike={
    name:"Mike",
    yearOfBirth:1984
};

mike.calAge = john.calAge;
mike.calAge();
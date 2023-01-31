// var name = "parthil";    //string
// console.log(name);

// var lastName = "Dhorajiya";
// var age=22;              //int

// var fullAge=true;        //boolean
// console.log(fullAge);

// var job;
// console.log(job);        //undefiend

// job = "IT";
// console.log(job);


// var _3year = 3;         //not use first letter in numerical
// var parthil = "p";

// //var if = 23;     //not use variable name for defineded letter

// console.log("I am " + name + lastName + "." + "I am "+ age + " old.");

// //Variable mutation
// age="twenty-two";

// alert("I am " + name + lastName + "." + "I am "+ age + " old.");

// var lastn = prompt("What is your last name?");
// console.log(name + " " + lastn);


// var a,b,c;
// a=5;
// b=6;

// //math operators
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// //logical operator
// var check = a<b;
// console.log(check);


// //typeof operator

// console.log(typeof check);
// console.log(typeof a);
// console.log(typeof "Hello word");


// //Operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;  //true
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// console.log(average);

// //Multiple assignments
// var x,y;
// x = y = (3+5) * 4 - 6;

// console.log(x,y);


// //More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x = x + 1;
// console.log(x);
// x += 1;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);


// //Coding Challenge============

// var markBMI , johnBMI;

// var height = prompt("Enter the mark height : ");
// var mass = prompt("Enter the mark mass : ");

// console.log("Mark height is " + height + " and mass is " + mass);
// markBMI = mass / (height * height);
// console.log("Mark bMI is " + markBMI);

// var height = prompt("Enter the John height : ");
// var mass = prompt("Enter the John mass : ");

// console.log("John height is " + height + " and mass is " + mass);
// johnBMI = mass / (height * height);
// console.log("John bMI is " + johnBMI);

// var Higher = markBMI > johnBMI;

// console.log("Is Mark BMI higher than John?\n" + Higher);

// if(markBMI > johnBMI)
// {
//     console.log("Mark BMI is higher than John");
// }
// else{
//     console.log("John BMI is higher than Marks");
// }


//IF ELSE statement=======================================

// var fname = "John";
// var civilstatus = "single";

// if(civilstatus == "married")
// {
//     console.log(fname + " is married!");
// }
// else
// {
//     console.log(fname + "will hopefully marry soon :) ");
// }

// var ismarried = true;

// if(ismarried)
// {
//     console.log(fname + " is married!");
// }
// else
// {
//     console.log(fname + "will hopefully marry soon :) ");
// }

// ===================================================================

// var fname = "John";
// var age = 20;

// if(age < 13)
// {
//     console.log(fname + " is a boy. ");
// }
// else if(age >= 13 && age < 20)
// {
//     console.log(fname + " is a teenager. ");
// }
// else if(age >= 20 && age < 30)
// {
//     console.log(fname + " is a young man. ");
// }
// else
// {
//     console.log(fname + " is a man. ");
// }



//Ternary Operator and switch Statement===================================
//  condition ? statement:statement;

// var fname = "parthil";
// var age = 22;

// //Ternary operator
// age >=18 ? console.log(fname + " drinking beer") : console.log(fname + " drinks juice. ");

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// //Switch statement ----------------------------------------------

// var job = "teacher";

//  switch(job){
//     case 'teacher':
//         case 'instructor':
//             console.log(fname + " teaches kids how to code. ");
//             break;
//             case 'driver':
//                 console.log(fname + " drives an uber in lisbon. ");
//                 break;
//                 case 'deginer':
//                     console.log(fname + " designs beautiful websites. ");
//                     break;
//                     default:
//                         console.log(fname + " dose something else. ");


//         }   
        
        

        

//Truthy and falsy value and equality operators========================

//falsy values: undefined, null, 0, '', NAN
//truly value : NOT falsy values

// var height;

// height = 23;

// if(height || height == 0)
// {
//     console.log("Variable is defirnd");
// }
// else
// {
//     console.log("Variable has NOT been defined");
// }

// //Equality operators
// if(height == "23")
// {
//     console.log("The == operator does type coercion!");
// }



//CODING CHALLENGE 2 ============================================

// var johnscore=(89+120+103)/3;
// var mikescore=(116+94+123)/3;
// var maryscore = (97 + 134 + 105)/3;

// console.log(johnscore,mikescore,maryscore);

// if(johnscore > mikescore && johnscore > maryscore)
// {
//     console.log("John team wins with " +  johnscore + " points");
// }
// else
// if(mikescore > johnscore && mikescore > maryscore)
// {
//     console.log("Mike team wins with " + mikescore + " points");
// }
// else
// if(maryscore > johnscore && maryscore > mikescore)
// {
//     console.log("mary team wins with " + maryscore + " points");
// }
// else
// {
//     console.log("There is a draw.");
// }
// // ==================================================================
// if(johnscore > mikescore)
// {
//     console.log("John team wins with " +  johnscore + " points");
// }
// else
// if(mikescore > johnscore)
// {
//     console.log("Mike team wins with " + mikescore + " points");
// }
// else
// {
//     console.log("There is a draw");
// }


// FUNCTION==================================================================

// function calculateAge(birthYear)
// {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn,ageMike,ageJane);

// function yearUnitRetirement(year, firstName)
// {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     retirement>=0 ? console.log(firstName + " retires in " + retirement + " years."):console.log("already retired.");
    
// }

// yearUnitRetirement(1990, "John");
// yearUnitRetirement(1948, "Mike");
// yearUnitRetirement(1969, "Jane");


// Function Statement and Expressions==================
// 

// Function Expression

// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case "teacher":
//             return firstName + " teaches kids how to code. ";

//         case "driver":
//             return firstName + " drives a cab in lisbon. ";

//         case "designer":
//             return firstName + " design beatiful websites. ";
//         default:
//             return firstName + " does something else ";
//     }

// }

// console.log(whatDoYouDo("teacher","John"));
// console.log(whatDoYouDo("driver","Mari"));
// console.log(whatDoYouDo("designer","Mark"));


// Array ===============================================================

//   var names = ["John", "Mark", "Jane"];
//   var years = new Array(1990, 1969, 1948);

//   console.log(names[2]);
//   console.log(names.length);

//   //Mutate array data
//   names[1] = "Ben";
//   names[names.length] = "Mary";
//   console.log(names);

//   var john = ["John", "Smith", 1990, "teacher", false];
//   console.log(john);
//   john.push("blue");  //for last added
//   john.unshift("Mr");   //for first added
  
//   console.log(john);

//   john.pop();       //for last delete
//   john.pop();
//   console.log(john);
//   john.shift();      //for first delete
//   console.log(john);

//   console.log(john.indexOf(23));

// var isDesigner = john.indexOf("desiner") == -1 ? "John is Not a designer." : "John is a designer";

//   console.log(isDesigner);


//Challenge=================================================
//   124   48   268
// 50amount<    20%
// 20 to 200    15%
// 200 more     10%

// var rBill = [124, 48, 268];


// function tipCal(bill){
//     var percentage;
//     if(bill < 50)
//     {
//         percentage = 0.2;
//     }
//     else
//     if(bill >= 50 && bill < 200)
//     {
//         percentage = 0.15;
//     }
//     else
//     {
//         percentage = 0.1;
//     }
//     return percentage * bill;
// }

// var bills = [12, 48, 268];
// var tips = [tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2])];

// var finalValues = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

// console.log(tips,finalValues);
// console.log(tips[0],finalValues[0]);
// console.log(tips[1],finalValues[1]);
// console.log(tips[2],finalValues[2]);
  

//Object and Properties===============================================================


//Object Literal
//  var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false
//  };

//  console.log(john.firstName);
//  console.log(john["lastName"]);
//  var x = "birthYear";
//  console.log(john[x]);
//mit
//  john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// //new Object Syntax
// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);



// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function(birthYear) {
//         return 2018 - birthYear;
//     },
//     calcAgeme: function() {
//         return 2018 - this.birthYear;
//     },
//     calcAgemes: function() {
//         this.age = 2018 - this.birthYear;
//     }
//  };

//  console.log(john.calcAge(1992));
//  console.log(john.calcAgeme());

//  john.calcAgemes();
//  console.log(john);  

//CODE CHALLENGE=================================================

// var John = {
//     fullName: "John",
//     mass: 55,
//     height: 4,
//     BMI: function(){
//         this.BMI = this.mass / (this.height*this.height);
        
//     }
// };

// John.BMI();
// console.log(John);
// var Mark = {
//     fullName: "Mark",
//     mass: 59,
//     height: 5,
//     BMI: function(){
//         this.BMI = this.mass / (this.height*this.height);
        
//     }
// };

// Mark.BMI();
// console.log(Mark);


// if(Mark.BMI > John.BMI)
// {
//          console.log(Mark.fullName + " BMI = " + Mark.BMI + " is higher than John");

// }
// else
// {
//          console.log(John.fullName + " BMI = " + John.BMI + " is higher than Marks");

// }


//LOOPS AND ITERATION====================================================================


//for loop 

// for(var i=1; i<=20; i+=2)
// {
//     console.log(i);
// }

// var john = ["John", "Smith", 1998, "designer", false, "blue"];
// for(var i=0; i<john.length; i++)
// {
//     console.log(john[i]);
// }

// //while loop
// var i=0;
// while(i < john.length)
// {
//     console.log(john[i]);
//     i++;
// }

//continue and break statements

var john = ["John", "Smith", 1998, "designer", false, "blue"];
for(var i=0; i<john.length; i++)
{
    if(typeof john[i] != "string") continue;
    console.log(john[i]);
}

for(var i=0; i<john.length; i++)
{
    if(typeof john[i] != "string") break;
    console.log(john[i]);
}

//Looping backwards
for(var i=john.length-1; i>=0; i--)
{
    console.log(john[i]);
}


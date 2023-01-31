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

var fname = "parthil";
var age = 22;

//Ternary operator
age >=18 ? console.log(fname + " drinking beer") : console.log(fname + " drinks juice. ");

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch statement ----------------------------------------------

var job = "teacher";

 switch(job){
    case 'teacher':
        case 'instructor':
            console.log(fname + " teaches kids how to code. ");
            break;
            case 'driver':
                console.log(fname + " drives an uber in lisbon. ");
                break;
                case 'deginer':
                    console.log(fname + " designs beautiful websites. ");
                    break;
                    default:
                        console.log(fname + " dose something else. ");


        }   
        
        

        

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

function calculateAge(birthYear)
{
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn,ageMike,ageJane);

function yearUnitRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    retirement>=0 ? console.log(firstName + " retires in " + retirement + " years."):console.log("already retired.");
    
}

yearUnitRetirement(1990, "John");
yearUnitRetirement(1948, "Mike");
yearUnitRetirement(1969, "Jane");



//Lecture: let and const ====================================================

// //ES5
// var name5 = "Jane Smith";
// var age5 = 23;
// name5 = "Jane Miller";
// console.log(name5);

// //ES6
// const name6 = "Jane Smith";
// let age6 = 23;
// //name6 = "Jane Miller";  //O/P:error ,value not change in using the const
// console.log(name6);     


// //ES5
// function driversLicence5(passedTest) {
    
//     if(passedTest)
//     {
//         console.log(firstName);   //O/P undefined
//         var firstName = "John";
//         var yearOfBirth = 1990;


//     }
//     //if the code in block outside same output run the code
//     console.log(firstName + ",born in " + yearOfBirth + ",is now officially allowed to drive a car.");
//     //if this code outside the function output show the error
// }
// driversLicence5(true);


// //ES6
// function driversLicence6(passedTest) {
//     //console.log(firstName);    //showing error===================

//      let firstName;
//         const yearOfBirth = 1990;  //no change the value
//     if(passedTest)
//     {
//         // let firstName = "John";               ===========
//         // const yearOfBirth = 1990;  //no change the value
//         firstName = "John";

//     }
//     //if the using let keyword you don't use value outside the block ===========for suggetion in if statement
//     console.log(firstName + ",born in " + yearOfBirth + ",is now officially allowed to drive a car.");


// }
// driversLicence6(true);

// var i=23;

// for(var i=0; i<5; i++)
// {   
//     console.log(i);     //show output
// }

// console.log(i); //not show output

// // =================================================
// let j=23;
 
// for(let j=0; j<5; j++)
// {   
//     console.log(j);     //show output
// }

// console.log(j); // show output



//Lecture : Block and IIFEs =========================================
//using a data privacy 

// {
//     const a =1;
//     let b= 2;
//     var c =3;

// }
// //console.log(a + b);
// console.log(c);  // O/P: 3

// //ES5
// (function() {
//     var c = 4;
// })();
//console.log(c);  //O/P error c is not definend


// Lecture : Strings ======================================================================================

// let firstName = "John";
// let lastName = "Smith";
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// //ES5

// console.log("This is " + firstName + " " + lastName + ". He was born in " + yearOfBirth + ". Today, he is " + calcAge(yearOfBirth) + " years old." );

// //ES6

// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith("J"));  //true
// console.log(n.endsWith("Sm"));   //false
// console.log(n.includes(" "));    //true
// console.log(`${firstName} `.repeat(5)); 


//Lecture : Arrow Function========================================================================================================

// const years = [1990, 1965, 1982, 1937];

// //ES5
// var age5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(age5);

// // ES6

// let age6 = years.map(el => 2016-el);
// console.log(age6);

// age6 = years.map((el,index) => `Age element ${index + 1}: ${2016-el}.`);
// console.log(age6);
// //OR
// age6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}:${age}`;
// });
// console.log(age6);

//Lecture : Arrow Function 2 =============================================================================================================

//ES5

// var box5 = {
//     color: "green",
//     position: 1,
//     clickMe: function() {

//         var self = this; //not use dirrect this keyword
//         document.querySelector(".green").addEventListener("click", function() {
//             var str = "This is box number " + self.position + " and it is " + self.color;
//             alert(str);
//                 });
//     }

// }

//box5.clickMe();

//ES6

// const box6 = {
//     color: "green",
//     position: 1,
//     clickMe: function() {

//         //using dirrect this keyword using arrow function
//         document.querySelector(".green").addEventListener("click", () => {
//             var str = "This is box number " + this.position + " and it is " + this.color;
//             alert(str);
//                 });
//     }

// }

// box6.clickMe();


// //O/P undefied 2 arrow function not consider object value
// const box66 = {
//     color: "green",
//     position: 1,
//     clickMe: () => {

//         //using dirrect this keyword using arrow function
//         document.querySelector(".green").addEventListener("click", () => {
//             var str = "This is box number " + this.position + " and it is " + this.color;
//             alert(str);
//                 });
//     }

// }

// box66.clickMe();

// =================

// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = function(friends)
// {
//     var arr = friends.map(function(el) {
//         return this.name + " is friends with " + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ["Bob", "Jane", "Mark"];
// new Person("John").myFriends5(friends);


// //ES6
// Person.prototype.myFriends5 = function(friends)
// {
//     var arr = friends.map(el => this.name + " is friends with " + el);
//     console.log(arr);
// }

// new Person("Parth").myFriends5(friends);


//Lecture : Arrays ===========================================================================================

// const boxes = document.querySelectorAll(".box");

// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = "dodgerblue";

// });


// //ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = "dodgerblue");


// //FORLOOP

// //ES5
// for(var i=0; i<boxesArr5.length; i++)
// {
//     if(boxesArr5[i].className == "box blue")
//     {
//       // continue; //blue is not change
//         break;   // if blue is coming than loop is break
//     }
//     boxesArr5[i].textContent = "I changed to blue";
// }


// //ES6
// for(const cur of boxesArr6)
// {
//     if(cur.className == "box blue")
//     {
//         continue;
//     }
//     cur.textContent = "I changed to blue!";
// }


// //ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });

// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);


// //ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));



//Lecture : Spread operator(...) ==================================================================================================

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);


// //ES6
// const sum3 = addFourAges(...ages);  //spread operator
// console.log(sum3);

// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["Mary", "Bob", "Ann"];

// const bigFamily = [...familySmith,...familyMiller];
// console.log(bigFamily);

// //Extra Example

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = "purple");


//Lecture: Rest parameter ==================================================================================


//ES5
// function isFullAge5() 
// {
//     console.log(arguments);

//     var argArr = Array.prototype.slice.call(arguments);

//     argArr.forEach(function(cur) {
//         console.log((2016 - cur) >= 18);
//     });
// }

// isFullAge5(1990, 1999, 1965);


// //ES6
// //Spread using in array ne ek sathe ly ley(function call)
// function isFullAge6(...years) {     //using parameter rest(function declaration for parameter) 
//     console.log(years);   //convert array
//    years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965);

// // =========================================

// //ES5
// function isFullAge5(limit) 
// {
//     console.log(arguments);

//     var argArr = Array.prototype.slice.call(arguments, 1); //1 is started 1990
//     console.log(argArr);
//     argArr.forEach(function(cur) {
//         console.log((2016 - cur) >= limit);
//     });
// }

// isFullAge5(18, 1990, 1999, 1965); //18 is a limit


// //ES6
// //Spread using in array ne ek sathe ly ley(function call)
// function isFullAge6(limit, ...years) {     //using parameter rest(function declaration for parameter) 
//     console.log(years);   //convert array
//    years.forEach(cur => console.log((2016 - cur) >= limit));
// }

// isFullAge6(18, 1990, 1999, 1965); //16 is a limit than start year



// Lecture : Default parameters  ===============================================================================================

//ES5=========
// function SmithPerson(firstName, yearOfBirth, lastName, nationality)
// {
//     lastName == undefined ? lastName = "Smith" : lastName=lastName;
//     nationality == undefined ? nationality = "american" : nationality = nationality ;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }



//ES6===========
// function SmithPerson(firstName, yearOfBirth, lastName="Smith", nationality="american")
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// var john = new SmithPerson("John", 1990);
// var emily = new SmithPerson("Emily", 1963, "Diaz", "Sapnish");
// console.log(john);




// Lecture : Map ===============================================================================================================

//  const question = new Map();
//  question.set("question", "What is the official name of the latest major javascript version?");
//  question.set(1, "ES5");
//  question.set(2, "ES6");
//  question.set(3, "ES2015");
//  question.set(4, "ES7");
//  question.set("correct", 3);
//  question.set(true, "Correct answer:)");
//  question.set(false, "Wrong please try again!");

//  console.log(question.get("question"));
//  console.log(question.size);

// //  question.clear();
//  if(question.has(4))
//  {
//     //question.delete(4);
//     console.log("Answer 4 is here");
//  }

//  //using for each
// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for (let [key, value] of question.entries()) {
//       if(typeof(key) == "number")
//       {
//             console.log(`Answer ${key}:${value}`);
//       }
// } 

// const ans = parseInt(prompt("Write the correct answer"));
// console.log(question.get(ans == question.get("correct")));


// Lecture : Classes ===========================================================================================================================

//ES5 ==============

// var Person5 = function(name, yearOfBirth, job)
// {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }

// Person5.prototype.calAge = function()
//  {
//      var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age); 
// }


// var john5 = new Person5("John", 1990, "teacher");

// //ES6================

// class Person6 {
//     constructor (name, yearOfBirth, job)
//     {
//          this.name = name;
//          this.yearOfBirth = yearOfBirth;
//          this.job = job;
//     }

//     calAge()
//     {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }
//     static greeting() {
//         console.log("Hey there!");

//     }
// }

// const john6 = new Person6("John", 1990, "teacher");
// Person6.greeting();


// Lecture : Classes with subClasses =============================================================================


//ES5
// var Person5 = function(name, yearOfBirth, job)
// {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }

// Person5.prototype.calAge = function()
//  {
//      var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age); 
// }

// var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals)
// {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olymicGames = olymicGames;
//     this.medals = medals;

// }


// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }


// var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);

// johnAthlete5.calAge();
// johnAthlete5.wonMedal();


// //ES6 ================

// class Person6 {
//     constructor (name, yearOfBirth, job)
//     {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calAge() {
//         var age =new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// class Athlete6 extends Person6 {
//     constructor(name, yearOfBirth, job, olymicGames, medals)
//     {
//         super (name, yearOfBirth, job);
//         this.olymicGames = olymicGames;
//         this.medals = medals;
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);

// johnAthlete6.wonMedal();
// johnAthlete6.calAge();



//======================================= CHALLENGE ===========================================================================

  class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
  }

  class Park extends Element {
    constructor(name, buildYear, area, numTress) {
        super(name, buildYear);
        this.area = area;
        this.numTress = numTress;
    }

    treeDensity() {
        const density = this.numTress / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
  }

  class Street extends Element {
    constructor(name, buildYear, length, size=3) {
        super(name,buildYear);
        this.length = length;
        this.size =size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, "tiny");
        classification.set(2, "small");
        classification.set(3, "normal");
        classification.set(4, "big");
        classification.set(5, "huge");
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
          
        
    }
    
  }

  const allParks = [new Park("Green Park", 1987, 0.2, 215),
                    new Park("National Park", 1894, 2.9, 3541),
                    new Park("Oak Park", 1953, 0.4, 949)];

  const allStreets = [new Street("Ocean Avenue", 1999, 1.1, 4),
                      new Street("Evergreen Street", 2008, 2.7, 2),
                      new Street("4th Street", 2015, 0.8), 
                      new Street("Sunset Boulevard", 1982, 2.5, 5)];

    function calc(arr) {

        const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
        
        return [sum, sum / arr.length];

    }
                      
  function reportParks(p) {
    console.log("-----PARKS REPORT-----");

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    // Which park has more than 1000 trees
    const i = p.map(el => el.numTress).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);


  }

  function reportStreets(s) {
    console.log("-----STREETS REPORT-----");

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());

  }

  reportParks(allParks);
  reportStreets(allStreets);
































//Function Constructor =========================================

// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: "teacher"
// };

// var Person = function(name,yearOfBirth,job){

//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//         // this.calAge = function(){
//         //     console.log(2016 - this.yearOfBirth);
//         // }
// }


// //prototype use for add object property in outside the the object so use prototype
// Person.prototype.calAge=function(){
//     console.log(2016 - this.yearOfBirth);

// }

// //this property dont allow in main object so all object datatype same lastname

// Person.prototype.lastName = "Smith";

  

// var john=new Person("John",1990,"teacher");
// var jane=new Person("Jane",1969,"designer");
// var mark=new Person("Mark",1948,"retried");
// john.calAge(); 
// jane.calAge();
// mark.calAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


//Object.create ========================================

// var personProto = {
//     calAge: function()
//     {
//         console.log(2023 - this.yearOfBirth);
//     }
// };

// var john =Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";

// var jane = Object.create(personProto,{
//     name: {value: "Jane"},
//     yearOfBirth:{value:1969},
//     job:{value: "designer"}
// });

// console.log(john);
// console.log(john.calAge());  


//Object VS Primitives ================================================

//Primitives
// var a=23;
// var b=a;      //Value define 23
// a=46;         //Change the value a
// console.log(a);     //O/P:46
// console.log(b);     //O/P:23


// //Objects
// var obj1 = {
//     name: "John",
//     age: 26
// };

// var obj2 = obj1;      //same as a obj1
// obj1.age = 30;       //change the value age both the object obj1 and obj2
// console.log(obj1.age);        //O/P:30
// console.log(obj2.age);        //O/P:30

// //Functions

// var age = 27;
// var obj = {
//     name: "Jonas",
//     city: "Lisbon"
// };

// function change(a,b) {
//     a=30;
//     b.city="San Francisco";
// }

// change(age,obj);   //change the value of city because city inside the object

// console.log(age);              //O/P:27
// console.log(obj.city);         //O/P:San Francisco



// Passing function as arguments ==========================================================


// var year = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//         var arrRes = [];
//         for(var i=0; i< arr.length; i++)
//         {
//                 arrRes.push(fn(arr[i]));
//         }
//         return arrRes;
// }

// function calAge(el)
// {
//         return 2023 - el;
// }

// function isFullAge(el)
// {
//         return el > 18;
// }

// function maxHeartRate(el)
// {
//         if(el>=18 && el<=81)
//         {
//                 return Math.round(206.9-(0.67*el));
//         }
//         else{
//             return -1;
//         }
// }

// var ages = arrayCalc(year,calAge);
// var fullAge = arrayCalc(ages,isFullAge);
// var rates = arrayCalc(ages,maxHeartRate);

// console.log(ages);
// console.log(fullAge);
// console.log(rates);

// // Funtion returning function =======================================================

// function interviewQ(job) {

//     if(job == "designer")
//     {
//         return function(name){
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     }
//     else
//     if(job == "teacher")
//     {
//         return function(name)
//         {
//             console.log("What subject do you teach, " + name + "?");
//         }
//     }
//     else
//     {
//         return function(name)
//         {
//             console.log("Hello " + name + ", What do you do?");
//         }
//     }

// }


// var teacherQuestion = interviewQ("teacher");
// var designQuestion  = interviewQ("designer");

// teacherQuestion("John"); 
// designQuestion("John");
// designQuestion("Jane");
// designQuestion("Mark");
// designQuestion("Mike");

// interviewQ("teacher")("Mark");


// IIFE(Immediately Invoked Function Expressions) ======================================================

// function game()
// {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();


// (function(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// //console.log(score);

// (function(goodluck){
//     var score = Math.random() * 10;
//     console.log(score >= 5-goodluck);
// })(5);


// // Closure ====================================================================================================


// function retirement(retirementAge)
// {
//         var a = " years left untill retirement.";
//         return function(yearOfBirth) {
//             var age = 2016 - yearOfBirth;
//             console.log((retirementAge - age)+a);
//         }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);



// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// retirement(66)(1990);


// //EXTRA TASK======
// function interviewQ(job) {
//     return function(name){
//     if(job == "designer")
//     {
//             console.log(name + ", can you please explain what UX design is?");
//     }
//     else
//     if(job == "teacher")
//     {
//             console.log("What subject do you teach, " + name + "?");
//     }
//     else
//     {
//             console.log("Hello " + name + ", What do you do?");
//     }
// }
// }

// interviewQ("teacher")("John");


// Bind , Call and apply ===========================================================================

// var john = {
//     name: "John",
//     age: 26,
//     job: "teacher",
//     presentation: function(style,timeOfDay){
//         if(style == "formal")
//         {
//                 console.log("Good " + timeOfDay + ", Ladies and gentlement! I\'m " + this.name + ", I\'m a " + this.job + " and I\'m " + this.age + " year old.");
//         }
//         else
//         if(style == "friendly")
//         {
//             console.log("Hey! What\'s up? I\'m " + this.name + ", I\'m a " + this.job + " and I\'m " + this.age + " year old. Have a nice " + timeOfDay + ".");
//         }
//     }
// };

// var Emily = {
//     name: "Emily",
//     age: 35,
//     job: "designer"
// };

// john.presentation("formal","morning");

// john.presentation.call(Emily, "friendly", "afternoon");

// // john.presentation.apply(Emily,["friendly","afternoon"]);

// var johnFriendly = john.presentation.bind(john,"friendly");

// johnFriendly("morning");
// johnFriendly("night");

// var emilyFormal = john.presentation.bind(Emily,"formal");
// emilyFormal("afternoon");


// //EXTRA WORK========

// var year = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//         var arrRes = [];
//         for(var i=0; i< arr.length; i++)
//         {
//                 arrRes.push(fn(arr[i]));
//         }
//         return arrRes;
// }

// function calAge(el)
// {
//         return 2023 - el;
// }

// function isFullAge(limit,el)
// {
//         return el >= limit;
// }

// var ages = arrayCalc(year,calAge);
// var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
// console.log(ages);
// console.log(fullJapan);



// CODING CHALLENGE========================================================================================


// (function() {
//     function Question(question, answers, correct)
// {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// Question.prototype.displayQuestion =
// function() {
//     console.log(this.question);

//     for(var i=0; i< this.answers.length; i++)
//     {
//         console.log(i+ ": " + this.answers[i]);
//     }
// }

// Question.prototype.checkAnswer =
// function(ans)
// {
//     if(ans == this.correct)
//     {
//         console.log("Correct answer!");
//     }
//     else
//     {
//         console.log("Wrong answer. Try again :)");
//     }
// }

// var q1 = new Question("Is Javascript the coolest programming language in the world?",["Yes","No"],0);
// var q2 = new Question("What is the name of this course\'s teacher?",["John","Micheal","Jonas"],2);
// var q3 = new Question("What does best describe coding?",["Boring","Hard","Fun","Tediuos"],2);

// var questions = [q1,q2,q3];

// var num = Math.floor(Math.random()*questions.length);
// //console.log(num);

// questions[num].displayQuestion();

// var answer = parseInt(prompt("Please select the correct answer."));

// questions[num].checkAnswer(answer);


// })();



// Expert Level ===========================================================



(function() {
    function Question(question, answers, correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion =
function() {
    console.log(this.question);

    for(var i=0; i< this.answers.length; i++)
    {
        console.log(i+ ": " + this.answers[i]);
    }
}

Question.prototype.checkAnswer =
function(ans, callback)
{
    var sc;
    if(ans == this.correct)
    {
        console.log("Correct answer!");
        sc = callback(true);
    }
    else
    {
        console.log("Wrong answer. Try again :)");
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log("Your current score is : " +score);
    console.log("--------------------------------");
}

var q1 = new Question("Is Javascript the coolest programming language in the world?",["Yes","No"],0);
var q2 = new Question("What is the name of this course\'s teacher?",["John","Micheal","Jonas"],2);
var q3 = new Question("What does best describe coding?",["Boring","Hard","Fun","Tediuos"],2);


    var questions = [q1,q2,q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct)
            {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

function nextQuestion()
{
   

    var num = Math.floor(Math.random()*questions.length);
//console.log(num);

    questions[num].displayQuestion();

    var answer = prompt("Please select the correct answer.");

   

    if(answer !== "exit")
    {
        questions[num].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }

    
}

    nextQuestion();

})();





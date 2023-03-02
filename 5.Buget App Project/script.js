//11:15
//14:11
var increment=0,decrement=0;

//Budget Controller
var budgetController = (function() {
    
    // var x =23;
    
    // var add = function(a) {
    //     return x + a;
    // }

    // return{
    //     publicTest: function(b) {
    //         return add(b);
    //     }
    // }
    //Some code
    var Expense = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {

        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
    }

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
    // var allExpenses = [];

    // var allIncomes = [];

    // var totalExpenses = 0;
//Short upar nu a short ma niche
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0 
        },
        budget: 0,
        percentage: -1
    };

    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            //ID = last ID + 1

           
            // Create new ID
            if(data.allItems[type].length > 0)
            {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
                console.log(ID);
            }
            else
            {
                ID = 0;
            }
                
            //Create new item based on "inc" or "exp" type
             if(type == "exp")
             {
                newItem = new Expense(ID, des,val);
             }
             else
             if(type == "inc")
             {
                newItem = new Income(ID, des,val);
             }

             //Push it into our data structure
             data.allItems[type].push(newItem);
             console.log(data);
             console.log(newItem);
             console.log(JSON.stringify(data));
             //localStorage.setItem('alphastore',JSON.stringify(data));
             this.startercopy();
             //Return the new element
             return newItem;
        
        },

        deleteItem: function(type, id){
            var ids, index;
            // id = 3;
            // data.allItems[type][id];
            // ids = [1,2,4,6,8]
            // index = 3;
          ids =  data.allItems[type].map(function(current) {
                return current.id;
            });
            // console.log(ids);
            index = ids.indexOf(id);

            if(index !== -1)
            {
                data.allItems[type].splice(index, 1);
            }

            this.startercopy();

        },

        calculateBudget: function() {

            // calculate total income and expences
            calculateTotal("exp");
            calculateTotal("inc");
            //calculate the budget: income - expences
            data.budget = data.totals.inc - data.totals.exp;
             

            //calculate the percentage of income that we spent
            if(data.totals.inc > 0){
            data.percentage = (data.totals.exp / data.totals.inc) * 100;
            data.percentage = Math.floor(data.percentage);
           
            } else {
                data.percentage = -1;
            }
            //Expense = 100 and income 300, Spent 33.333% = 100/300 = 0.3333 * 100


        },

        calculatePercentages: function() {
            // a=20 b=10 c=40  income=100
            // a = 20/100=20%
            // b=10/100=10%
            // c=40/100=40%
            console.log(data);
             data.allItems.exp.forEach(function(cur) {
                console.log(cur);
                //this.cur.calcPercentage();
               // cur.calcPercentage(data.totals.inc);
             });

        },

        getPercentages: function() {

            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;

        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
                allitem: data.allItems
            };

        },
        testing: function() {
            console.log(data);
        },
        startercopy : function(){
            console.log(data);
            localStorage.setItem('alphastore',JSON.stringify(data));
        },
        starteraccess :  function(){
            if(localStorage.key(0) !== "alphastore")
            {
                this.startercopy();
            }
            
            const D = localStorage.getItem('alphastore');
            let newItem, ID,des,val;
            let j = JSON.parse(D);
           if(j.allItems["inc"].length == 0)
           {

           }
           else
           {
            let count = j.allItems["inc"].length;
            console.log(j.allItems["inc"].length);
            for(i=0; i<count; i++)
            {
                if(j.allItems["inc"].length > 0)
                {
                    ID = j.allItems["inc"][0].id;
                    des = j.allItems["inc"][0].description;
                    val = j.allItems["inc"][0].value;
                   //ID = data.allItems[type][data.allItems[type].length -1].id + 1;
                    console.log(ID,des,val);
                }
                else
                {
                    ID = 0;
                    //console.log(ID);
                }
                   newItem = new Income(ID, des,val);
                   console.log(newItem);
                //Push it into our data structure
                console.log(D);
               
                j.allItems["inc"].shift();
               // j.allItems.inc.shift();
                console.log(j);
                j.allItems["inc"].push(newItem);
                //console.log(j);
            }
           }

           if(j.allItems["exp"].length == 0){

           }
           else
           {
            let count = j.allItems["exp"].length;
            console.log(j.allItems["exp"].length);
            for(i=0; i<count; i++)
            {
                if(j.allItems["exp"].length > 0)
                {
                    ID = j.allItems["exp"][0].id;
                    des = j.allItems["exp"][0].description;
                    val = j.allItems["exp"][0].value;
                   //ID = data.allItems[type][data.allItems[type].length -1].id + 1;
                    console.log(ID,des,val);
                }
                else
                {
                    ID = 0;
                    //console.log(ID);
                }
                   newItem = new Expense(ID, des,val);
                   console.log(newItem);
                //Push it into our data structure
                console.log(D);
               
                j.allItems["exp"].shift();
               // j.allItems.inc.shift();
                console.log(j);
                j.allItems["exp"].push(newItem);
                //console.log(j);
            }
           }     
           // }
            
          //  let d =  data.allItems.inc[0][2].id;
            //console.log(d);
            //let values =  Object.keys(data.allItems.inc[0]);
           // console.log(values);
            console.log(D);

            // if(type == "exp")
            // {
            //    newItem = new Expense(ID, des,val);
            // }
            // else
            // if(type == "inc")
            // {
            //    newItem = new Income(ID, des,val);
            // }

            // //Push it into our data structure
            // data.allItems[type].push(newItem);

            console.log('Compare data both ',data == D);
            if(JSON.parse(D)){

                data = j;
            }
            console.log('Compare data both ',data == D);
            console.log(data);
        }
    };

})();




//UI Controller
var UIcontroller = (function() {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expencesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expensesPercLabel: ".item__percentage",
        dateLabel: ".budget__title--month"


    };

    var formatNumber = function(num, type) {
        var numSplit, inc, dec, type;

        // + or - before number exactly 2 decimal points comma separating the thousands

        // 2310.4567 -> + 2,310.46
        // 2000 -> + 2,000.00

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split(".");

        int = numSplit[0];
        if(int.length > 3)
        {
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3,3); // input 23510,O/P 23,510
            
        }
        dec = numSplit[1];
        console.log();
        return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
        
    };
    var nodeListForEach = function(list, callback) {
                for(var i=0; i<list.length; i++)
                {
                    callback(list[i], i);
                }
            };
//SOME CODE
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,     //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        addListItem: function(obj, type) {

            var html;
                // Create HTML string with placeholder text
                var now, month, months, year, dates,timehour, timeminit,time,timesec;
                console.log(obj.id);
            now = new Date();

            month = now.getMonth();
            months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

            year = now.getFullYear();
            dates = now.getDate();
            timehour = now.getHours();
            timeminit = now.getMinutes();
            timesec = now.getSeconds();
            time = `${timehour}:${timeminit}:${timesec}`;
                if(type == "inc")
                {
                    increment++;
                    element = DOMstrings.incomeContainer;

              html = '<div class="item clearfix" id="inc-%id% increment-num"> <div class="item__description"><pre class="num-inc">%+1.%. </pre> %description% <p>%date% %month% %year% %time%</p></div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
                }
                else
                if(type == "exp")
                {
                    decrement++;
                    element = DOMstrings.expencesContainer;
                    html =' <div class="item clearfix" id="exp-%id% decrement-num"> <div class="item__description"><pre class="num-dec">%-1.%. </pre> %description% <p>%date% %month% %year% %time%</p></div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
                }

              //Replace the placeholder text with some actual data
                newHtml = html.replace("%id%",obj.id);
                newHtml = newHtml.replace("%description%", obj.description);
                newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));
                newHtml = newHtml.replace("%+1.%", increment);
                newHtml = newHtml.replace("%-1.%", decrement );
                newHtml = newHtml.replace("%date%", dates);
                newHtml = newHtml.replace("%month%", months[month]);
                newHtml = newHtml.replace("%year%", year);
                newHtml = newHtml.replace("%time%", time);




                //Insert the HTML into DOM
                document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);

        },

        deleteListItem: function(selectorID) {
            var el =document.getElementById(selectorID);
            
            el.parentNode.removeChild(el);
        },

        clearFields: function() {
            var fields, fieldsArr;
          fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue);
        //   console.log(fields);  
          fieldsArr = Array.prototype.slice.call(fields);
            //  console.log(fieldsArr);
             fieldsArr.forEach(function(current, index, array){
                current.value= "";
             });
             fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = "inc" : type = "exp";
            // console.log(DOMstrings.budgetLabel);
            document.querySelector(DOMstrings.budgetLabel).textContent =formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, "exp");

            if(obj.percentage > 0)
            {
                document.querySelector(DOMstrings.percentageLabel).textContent =  obj.percentage + "%";

            }
            else
            {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
                document.querySelector(".budget__income--percentage").textContent = "";

            }

        },

        displayPercentages: function(percentages) {

            var fiels = document.querySelectorAll(DOMstrings.expensesPercLabel);

            // var nodeListForEach = function(list, callback) {
            //     for(var i=0; i<list.length; i++)
            //     {
            //         callback(list[i], i);
            //     }
            // };

            nodeListForEach(fiels, function(current, index) {

                //Do stuff
                if(percentages[index] > 0)
                {
                    current.textContent = percentages[index] + "%";
                }
                else{
                    current.textContent = "---";
                }

            });

        },

        displayMonth: function() {

            var now, month, months, year, dates,timehour, timeminit;

            now = new Date();

            month = now.getMonth();
            months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            year = now.getFullYear();
            dates = now.getDate();
            timehour = now.getHours();
            timeminit = now.getMinutes();
            // console.log(timeminit);
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + " " + year;

        },

        changedType: function() {

            var fields = document.querySelectorAll(DOMstrings.inputType + "," + DOMstrings.inputDescription + "," + DOMstrings.inputValue);
           
            nodeListForEach(fields, function(cur) {
                cur.classList.toggle("red-focus");
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle("red");

        },

        getDOMstrings: function() {
            return DOMstrings;
        },

        saveData: function() {
             input = UIcontroller.getInput();
            //   // 2. Add the item to the budget controller
            //   newItem = budgetController.addItem(input.type, input.description, input.value);
            //     console.log(newItem);

            //   // 3. Add the item to the UI
            //      UICtrl.addListItem(newItem, input.type);

            //   // 4. Clear the fields
            //      UICtrl.clearFields();

            //   // 5. Calculate and update budget
            //      updateBudget(); 

            //   // 6. Calculate and update percentage
            //      updatePercentages();
            
                 budgetController.starteraccess();
                 let data = budgetController.getBudget();
                 console.log(data);
                //  var jsonObj = JSON.stringify(data);
                //  console.log(jsonObj);
                //  console.log(data.allitem.exp.length);
                //  const str = localStorage.getItem("alphastore");
                 
                 //console.log(str);

                 if(data){
                    console.log("sasd");
                    //const parsedArr = JSON.parse(data);
                    console.log(data.allitem.inc.length);
                   //  localStorage.setItem("Productdata",jsonObj);
                   if(data.allitem.exp.length != 0 || data.allitem.inc.length != 0)
                   {
                      
                      
                       for(i=0; i<data.allitem.inc.length; i++)
                       {
                          const dataforlist = data.allitem.inc[i];
                          console.log(dataforlist);
                          console.log(data.allitem.inc[i].id);
                          console.log(input.type);
                          UIcontroller.addListItem(dataforlist, "inc");
                       }
                       for(i=0; i<data.allitem.exp.length; i++)
                       {
                          const dataforlist = data.allitem.exp[i];
                          console.log(dataforlist);
                          console.log(data.allitem.exp[i].id);
                          console.log(input.type);
                          UIcontroller.addListItem(dataforlist, "exp");
                       }
                       
                   }
                   
                 }
                
                
                
        }

    };



})();

function serchdata()
{
    document.querySelector(DOM.inputBtn).addEventListener("change",ctrlAddItem);
}

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem);
        document.querySelector(DOM.inputBtn).addEventListener('click',updateDataafterenter);
        document.addEventListener("keypress", function(event) {
    
            // console.log(event);
            if(event.keyCode == 13 || event.which == 13)
            {
                ctrlAddItem();
               console.log("Enter was pressed.");
               var itemID;
               updateDataafterenter();
            //    itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;   //list data
            //    var el =document.getElementById(itemID);
            //    el.style.display = null;
            // document.querySelector(DOM.inputDescription).addEventListener('input',updateSearchdataforshow);
            }

            

        });
        document.querySelector(DOM.inputDescription).addEventListener('input',debounce(updateSearchdataforhide,500));
        document.querySelector(DOM.inputDescription).addEventListener('input',debounce(updateSearchdataforshow,500));

        document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener("change", UICtrl.changedType);
    };

   var updateSearchdataforhide = function(e) 
   {
   // console.log(e.target.value);
    var itemID;
    var containerdataInc = document.querySelectorAll("[id^='inc-']");
    var containerdataDec = document.querySelectorAll("[id^='exp-']");
   // console.log(containerdataDec)
    var containerdata = [...containerdataDec , ...containerdataInc];

    if(containerdata.length !== 0)
    {

    for(i=0; i<containerdata.length; i++)
    {
        const parent = containerdata[i];
       // console.log(parent);
             
        const child = parent.querySelector(".item__description").textContent;
        if(e.target.value !== child)
             {
                var el = document.getElementById(containerdata[i].id);
                //console.log(el);
                el.style.display = "none";
             }
            
    }
       
    }
   }
   var updateDataafterenter = function()
   {
    var containerdataInc = document.querySelectorAll("[id^='inc-']");
    var containerdataDec = document.querySelectorAll("[id^='exp-']");
    var containerdata = [...containerdataDec , ...containerdataInc];
    if(containerdata.length !== 0)
    {
             var el = document.getElementById(containerdata[0].id);

             for(i=0; i<containerdata.length; i++)
             {
                 const parent = containerdata[i];
                      
                 const child = parent.querySelector(".item__description").textContent;
                 
                         var el = document.getElementById(containerdata[i].id);
                         el.style.display = null;
                               
             }
    }
   }
   var updateSearchdataforshow = function(e)
   {
    var containerdataInc = document.querySelectorAll("[id^='inc-']");
    var containerdataDec = document.querySelectorAll("[id^='exp-']");
    //console.log(containerdataDec)
    var containerdata = [...containerdataDec , ...containerdataInc];

   // console.log(containerdata);
    if(containerdata.length !== 0)
    {
             var el = document.getElementById(containerdata[0].id);
             for(i=0; i<containerdata.length; i++)
             {
                 const parent = containerdata[i];
                      
                 const child = parent.querySelector(".item__description").textContent;
                 if(child.includes(e.target.value))
                      {
                         var el = document.getElementById(containerdata[i].id);
                         el.style.display = null;
                      }
                     
             }
             if(e.target.value == "")
             {
                updateDataafterenter();
             }

    }
   }

   var debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this;
        const args = arguments;
            clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}
    // var z = budgetCtrl.publicTest(5);

    // return {
    //     anotherPublic: function() {
    //         console.log(z);
    //     }
    // }

    var updateBudget = function()
    {
         // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        //2. Return the budget
        var budget = budgetCtrl.getBudget();
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    }

    var updatePercentages = function() {

        //1. Calculate percentages
        budgetCtrl.calculatePercentages();

        //2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        //3. Update the UI with the new percentages
         console.log(percentages);

        UICtrl.displayPercentages(percentages);
    }

    // function debounce(func, timeout = 300){
    //     let timer;
    //     return (...args) => {
    //       clearTimeout(timer);
    //       timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //     };
    //   }
        
    //   function saveInput(){
    //     console.log('Saving data');
    //   }
      
    //   const processChanges = debounce(() => saveInput());
    var ctrlAddItem = function()
    {
        var input, newItem;
        //console.log("Button was clicked.");
         // 1. Get the field input data
            input = UICtrl.getInput();
            // console.log(input);

            if(input.description != "" && !isNaN(input.value) && input.value > 0)
            {
                   // 2. Add the item to the budget controller
                    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
                    console.log(newItem);
                    console.log(input.type);

                   // 3. Add the item to the UI
                      UICtrl.addListItem(newItem, input.type);
 
                   // 4. Clear the fields
                      UICtrl.clearFields();
 
                   // 5. Calculate and update budget
                      updateBudget(); 

                   // 6. Calculate and update percentage
                      updatePercentages();
                      //budgetCtrl.startercopy();
                      let data = budgetCtrl.getBudget();
                      console.log(data);
                      var jsonObj = JSON.stringify(data);
                      console.log(jsonObj);
                      console.log(data.allitem);
                      localStorage.setItem("Productdata",jsonObj);
                      const str = localStorage.getItem("Productdata");
                      console.log(str);
                      const parsedArr = JSON.parse(str);
                      console.log(parsedArr);

                      


            }
            
     

       
    };

    var ctrlDeleteItem = function(event) {
        //console.log(event.target);
        var itemID, splitID;
        //for find class name use event.target and find button parent using parentNode
        //and find only id use end .id

        // console.log(event.target.parentNode.parentNode.parentNode.parentNode);
       
       
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.firstChild.nodeName);
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        //console.log(itemID);
        
        if(itemID)
        {
              //inc-1
               splitID = itemID.split("-");
               type = splitID[0];
               ID = parseInt(splitID[1]);
               //console.log(splitID , type, ID);

               //1. delete the item from the data structure
                budgetCtrl.deleteItem(type, ID);
             
               //2. Delete the item from the UI
                UICtrl.deleteListItem(itemID);
                // newHtml = newHtml.replace("%+1.%", increment);
                // newHtml = newHtml.replace("%-1.%", decrement );
                let alpha = event.target.parentNode.parentNode.parentNode.parentNode;
                // console.log(alpha);
                notes = alpha.querySelector('.num-inc');
                // console.log(notes);
                // notes.innerText = "Welcome to JavaScript";
                var containerdataInc = document.querySelectorAll("[id^='inc-']");
                var containerdataDec = document.querySelectorAll("[id^='exp-']");
                // console.log(containerdataInc.length);
                // console.log(containerdataInc[0]);
               
                increment=0;
                decrement=0;
                for(i=0; i<containerdataInc.length; i++)
                {
                    increment++;
                    let main = containerdataInc[i].querySelector(".num-inc");
                    // console.log(main);
                    // console.log(increment);
                    main.textContent = `${increment}. `;
                    // UICtrl.addListItem().newHtml = newHtml.replace("%+1.%", increment);
                    // console.log(UICtrl.addListItem().newHtml);

                }
                for(i=0; i<containerdataDec.length; i++)
                {
                    decrement++;
                    let main = containerdataDec[i].querySelector(".num-dec");
                    // console.log(main);
                    // console.log(decrement);
                    main.textContent = `${decrement}. `;
                    // UICtrl.addListItem().newHtml = newHtml.replace("%+1.%", increment);
                    // console.log(UICtrl.addListItem().newHtml);

                }
               //3. Update and show the new budget
               updateBudget(); 
               //4. Calculate and update percentages
               updatePercentages();
        }
    };

  return {
    init: function() {
        console.log("Application has started.");
        UICtrl.displayMonth();
        UIcontroller.saveData();
        UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
        });
       // budgetCtrl.starteraccess();
        setupEventListeners();
        // 3. Update and show the new budget
         updateBudget(); 
         //4. Calculate and update percentages
         updatePercentages();
        
    },
  };

})(budgetController, UIcontroller);

controller.init();
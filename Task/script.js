
const container = document.querySelector(".container"),
inputPart = document.querySelector(".input-part"),
selectOption = document.querySelector(".city");
// const loader = document.querySelector(".loading");
const card = document.querySelector(".card");

// loader.classList.add("display");
// setTimeout(() => {
//     loader.classList.remove("display");
// }, 10000);
function displayLoading() {
    loader.style.display = 'flex';
    card.style.display = "none";
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 10000);
}

// hiding loading 
function hideLoading() {
    // var loader = document.getElementById("loading");
    // loader.style.display = 'none';
    loader.style.display = 'none';
    card.style.display = "flex";
}

let api,cityApi,countrydetail,contryIndex=-1,countryName='';
let prev;
var cities;
let flag = 0;

fetchlocationdata();
selectOption.addEventListener("click", () =>{
    var value = selectOption.value;
    // console.log(value);
if(value !== prev){
    // console.log(value);
    displayLoading();
     reqApi(value);
    }
    prev = value;

});

async function firstClick(){
   
    // fetch().then(fetchlocationdata()).then(fetchcitydetail()).then(cityData());
//    const k = await fetchlocationdata();
    if(flag===0){
      
        cityData();
        // console.log('peli var');
        flag = 1;
    }
}




// (function () {
//     console.log("greeting");
//     cityData();
// })()


//functions

// location contry name
async function fetchlocationdata()
{
    let myPromise = new Promise(function(resolve, reject) {
        function onError(error){
    
            console.log(error.message);
            
        }
        countrydetail="https://us1.locationiq.com/v1/reverse.php?key=pk.6f99095f878ab3ad959f585708e0f9f2&lat=-37.870662&lon=144.9803321&format=json";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        function onSuccess(position){
            const {latitude, longitude} = position.coords; 
            countrydetail = "https://us1.locationiq.com/v1/reverse.php?key=pk.6f99095f878ab3ad959f585708e0f9f2&lat=" + latitude + "&lon=" + longitude + "&format=json";
            fetch(countrydetail).then(res => res.json())
            .then(result => countryNameLiveLocation(result) ).then(fetchcitydetail)
            .catch((e) =>{
             
                console.log(e);
            });
        
        }
        function countryNameLiveLocation(info){
            resolve(countryName = info.address.country);
           // countryName = info.address.country;
            resolve(console.log(countryName));
        }
        resolve(cities);
      });
    //   fetchcitydetail();
}

//cities name

async function fetchcitydetail()
{
    
    cityApi="https://countriesnow.space/api/v0.1/countries";
fetch(cityApi).then(res => res.json())
.then(result => cityDetail(result))
.catch((e) =>{
    console.log(e);
});
}

function cityDetail(info)
{
    for(i in info.data){
        if(info.data[i].country === countryName){
            contryIndex = i;
            break;
        }
    }
    
     cities = info.data[contryIndex].cities;
     console.log(cities);
}


 
async function cityData()
{
    let myPromise = new Promise(function(resolve, reject) {
        console.log("jdfj",cities);
        resolve(cities);
      });
     

    

    var array = await myPromise;
    console.log(array)

    var string = "";
    for(i=0; i<array.length; i++)
    {
        string = string+`<option class="" value="${array[i]}">`+array[i]+"</option>";
    }
    // console.log(string);
   
    document.getElementById("city").innerHTML="<select>"+string+"</select>";
    // console.log("<select>"+string+"</select>");
}







//wether detils
function reqApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3045dd712ffe6e702e3245525ac7fa38`;
    fetchData();
}

function fetchData(){
    fetch(api).then(res => res.json())
    .then(result => weatherDetails(result))
    .catch(() =>{
     
        console.log("error");
    });
}

function weatherDetails(info){
    if(info.cod == "404"){ 
         console.log("Please Enter valid data");
    }else{
        const city = info.name;
        // const country = info.sys.country;
         const {description, id, icon} = info.weather[0];
        // console.log(info.weather[0]);
         const {temp} = info.main;
         const date = new Date();
         var days_Name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
         
         const month_Name = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
        const day =  days_Name[date.getDay()];
        const month = month_Name[date.getMonth()];
        const days = date.getFullYear();

        // console.log(days);
        // console.log(icon);
        document.getElementById("imgweather").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        
        document.querySelector(".date-class").innerText = `${day},${month} ${days}`;
        document.querySelector(".temp .numb").innerText = Math.floor(temp);
        document.querySelector(".weather").innerText = description;
        hideLoading();
    }
}

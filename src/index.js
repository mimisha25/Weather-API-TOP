 import "./styles.css";
// import { greeting } from "./greeting.js";
// console.log(greeting);

let url = new URL("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london/today?key=LR987XW4RZUANQTRGDCQCWC4R");
const input = document.querySelector("input");
const form = document.querySelector("form");


async function r(){
    let response=await fetch(url);
    if(!response.status==200){
        throw new Error(`Errror! ${response.status}`)
    }
    let json = await response.json();
    const temps=[];
    const arr=[1,4,7,10,13,16,19,22 ];
arr.forEach(i=>{
    temps.push(json.days[0].hours[i]);
});
console.log(temps);
hours(temps);
    document.querySelector("h3").innerText = `City: ${json.address}`;
    document.querySelector("p").innerText=`Condition: ${json.currentConditions.conditions}`;
    document.querySelector("h4").innerText=`Temperature: ${json.currentConditions.temp}`;
}
r();
input.addEventListener("keyup", (e)=>{
e.preventDefault();
let pathArray = url.pathname.split("/");
pathArray[pathArray.length - 2] = input.value;
url.pathname=pathArray.join("/");
})

form.addEventListener("submit", async (e)=>{
     e.preventDefault();
    try{
r();
    }catch (e){
            alert(`Errrror for total: ${e}`)
    }
});

const timeContainer = document.createElement("div");
timeContainer.classList.add("timeContainer");
document.querySelector("#day").appendChild(timeContainer);

function hours(temps){
    for(let i=0; i<8; i++){
        const div = document.createElement("div");
        div.classList.add("timeDiv");
        const h5=document.createElement("h5");
        let shortTime= temps[i].datetime;
        shortTime=shortTime.slice(0, 5);
        h5.innerText=shortTime;
        const img=document.createElement("img");
        img.classList.add("imgIcon");
        // if(temp[i].condition === "Clear"){
        //     img.src="https://ssl.gstatic.com/onebox/weather/64/sunny.png";
        //     div.appendChild(img);
        // }else if(tem[i].condition === "Partially cloudy"){
        //     img.src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png";
        //     div.appendChild(img);
        // }else if(tem[i].condition === "Clear"){
        //     img.src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png";
        //     div.appendChild(img);
        // }else if(tem[i].condition === "Rain, Overcast"){
        //     img.src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png";
        //     div.appendChild(img);
        // }

        const h6=document.createElement("h6");
         h6.innerText=temps[i].temp;
        div.appendChild(h5);
        div.appendChild(h6);
        timeContainer.appendChild(div);
    }
}

import{hours} from "./hourlyWeather.js";
import{weeks} from "./weeklyWeather.js";

export function render(url){
    day(url);
    week(url);
}

async function day(url){
    let pathArray = url.pathname.split("/");
    pathArray[pathArray.length - 1] = "today";
    url.pathname=pathArray.join("/");
     let response=await fetch(url);
    if(!response.status==200){
        throw new Error(`Errror! ${response.status}`)
    }

    let json = await response.json();
    const temps=[];
    const arr=[1,4,7,10,13,16,19,22 ];
    arr.forEach(i=>temps.push(json.days[0].hours[i]));
    hours(temps);

    document.querySelector("#day h3").innerText = `City: ${json.address}`;
    document.querySelector("p").innerText=`Condition: ${json.currentConditions.conditions}`;
    document.querySelector("h4").innerText=`Temperature: ${json.currentConditions.temp} F`;
}

async function week(url){
    let pathArray = url.pathname.split("/");
    pathArray[pathArray.length - 1] = "next7days";
    url.pathname=pathArray.join("/");
     let response=await fetch(url);
     if(!response.status==200){
        throw new Error(`Errror! ${response.status}`)
    }
        let json = await response.json();
    weeks(json);
}
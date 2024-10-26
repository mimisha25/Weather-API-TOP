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

    document.querySelector("#day h3").innerText = `City: ${json.address}`;
    document.querySelector("p").innerText=`Condition: ${json.currentConditions.conditions}`;
    document.querySelector("h4").innerText=`Temperature: ${json.currentConditions.temp} F`;
}
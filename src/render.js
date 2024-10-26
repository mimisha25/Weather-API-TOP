import{hours} from "./hourlyWeather.js";
import{weeks} from "./weeklyWeather.js";


export async function render(){
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
import clearday from "./icons/clear-day.png";
import clearnight from "./icons/clear-night.png";
import cloudy from "./icons/cloudy.png";
import fog from "./icons/fog.png";
import hail from "./icons/hail.png";
import partlycloudyday from "./icons/partly-cloudy-day.png";
import partlycloudynight from "./icons/partly-cloudy-night.png";
import rainsnowshowersday from "./icons/rain-snow-showers-day.png";
import rainsnowshowersnight from "./icons/rain-snow-showers-night.png";
import rainsnow from "./icons/rain-snow.png";
import rain from "./icons/rain.png";
import showersday from "./icons/showers-day.png";
import showersnight from "./icons/showers-night.png";
import sleet from "./icons/sleet.png";
import snowshowersday from "./icons/snow-showers-day.png";
import snowshowersnight from "./icons/snow-showers-night.png";
import snow from "./icons/snow.png";
import thunderrain from "./icons/thunder-rain.png";
import thundershowersday from "./icons/thunder-showers-day.png";
import wind from "./icons/wind.png";
import thunder from "./icons/thunder.png";
import thundershowersnight from "./icons/thunder-showers-night.png";


const objImport=[
    clearday, clearnight, cloudy, fog, hail, partlycloudyday,
    partlycloudynight, rainsnowshowersday, rainsnowshowersnight, 
    rainsnow, rain, showersday, showersnight, sleet, snowshowersday,
    snowshowersnight, snow, thunderrain, thundershowersday, 
    wind, thunder, thundershowersnight];

    const iconsArr = ["./icons/clear-day.png", 
        "./icons/clear-night.png", 
        "./icons/cloudy.png",
        "./icons/fog.png",
        "./icons/hail.png",
        "./icons/partly-cloudy-day.png",
        "./icons/partly-cloudy-night.png",
        "./icons/rain-snow-showers-day.png",
        "./icons/rain-snow-showers-night.png",
        "./icons/rain-snow.png",
        "./icons/rain.png",
        "./icons/showers-day.png",
        "./icons/showers-night.png",
    "./icons/sleet.png",
    "./icons/snow-showers-day.png",
    "./icons/snow-showers-night.png",
    "./icons/snow.png",
    "./icons/thunder-rain.png",
    "./icons/thunder-showers-day.png",
    "./icons/wind.png",
    "./icons/thunder.png",
    "./icons/thunder-showers-night.png"
    ];
    
    export function icon(weatherCondition, div, img){

        // conditionsA.findIndex(e=>{
        //     if(weatherCondition===e){
        //         objImport.forEach(a=>{
        //             let importDeclaration=e.replace(/-/g, "");
        //             if(importDeclaration==a){
        //                 console.log(a);
        //             }
        //         })
        //     }
        // })
        
    
        if(weatherCondition==="cloudy"){
            img.src=cloudy;
            div.appendChild(img);
        }else  if(weatherCondition==="clear-day"){
            img.src=clearday;
            div.appendChild(img);
        }else  if(weatherCondition==="clear-night"){
            img.src=clearnight;
            div.appendChild(img);
        }else  if(weatherCondition==="fog"){
            img.src=fog;
            div.appendChild(img);
        }else  if(weatherCondition==="hail"){
            img.src=hail;
            div.appendChild(img);
        }else  if(weatherCondition==="partly-cloudy-day"){
            img.src=partlycloudyday;
            div.appendChild(img);
        }else  if(weatherCondition==="partly-cloudy-night"){
            img.src=partlycloudynight;
            div.appendChild(img);
        }else  if(weatherCondition==="rain-snow-showers-day"){
            img.src=rainsnowshowersday;
            div.appendChild(img);
        }else  if(weatherCondition==="rain-snow-showers-night"){
            img.src=rainsnowshowersnight;
            div.appendChild(img);
        }else  if(weatherCondition==="rain-snow"){
            img.src=rainsnow;
            div.appendChild(img);
        }else  if(weatherCondition==="rain"){
            img.src=rain;
            div.appendChild(img);
        }else  if(weatherCondition==="showers-day"){
            img.src=showersday;
            div.appendChild(img);
        }else  if(weatherCondition==="showers-night"){
            img.src=showersnight;
            div.appendChild(img);
        }else  if(weatherCondition==="sleet"){
            img.src=sleet;
            div.appendChild(img);
        }else  if(weatherCondition==="snow-showers-day"){
            img.src=snowshowersday;
            div.appendChild(img);
        }else  if(weatherCondition==="snow-showers-night"){
            img.src=snowshowersnight;
            div.appendChild(img);
        }else  if(weatherCondition==="snow"){
            img.src=snow;
            div.appendChild(img);
        }else  if(weatherCondition==="thunder-rain"){
            img.src=thunderrain;
            div.appendChild(img);
        }else  if(weatherCondition==="thunder-showers-day"){
            img.src=thundershowersday;
            div.appendChild(img);
        }else  if(weatherCondition==="wind"){
            img.src=wind;
            div.appendChild(img);
        }else  if(weatherCondition==="thunder"){
            img.src=thunder;
            div.appendChild(img);
        }else  if(weatherCondition==="thunder-showers-night"){
            img.src=thundershowersnight;
            div.appendChild(img);
        }
            // for(let i=0; i<conditionsA.length;i++){
            //     if(conditionsA[i]===weatherCondition){
            //          let importDeclaration=conditionsA[i].replace(/-/g, "");
            //          for( const path of objImport){
            //             if(importDeclaration===path){
            //                 console.log("hey");
            //             }
            //          }
            //     }   
            // }
        };
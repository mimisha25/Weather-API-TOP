const timeContainer = document.createElement("div");
timeContainer.classList.add("timeContainer");
const h3=document.createElement("h3");
h3.innerText="Today's Hourly Weather";
document.querySelector("#day").appendChild(h3)
document.querySelector("#day").appendChild(timeContainer);

import {icon} from "./showIcon.js";
export function hours(temps){
    timeContainer.innerHTML="";
    for(let i=0; i<8; i++){
        const div = document.createElement("div");
        div.classList.add("timeDiv");
        const h5=document.createElement("h5");
        let shortTime= temps[i].datetime;
        shortTime=shortTime.slice(0, 5);
        h5.innerText=shortTime;

        const img=document.createElement("img");
        img.classList.add("imgIcon");
        img.setAttribute("src", "");
         let weatherCondition = temps[i].icon;
        icon(weatherCondition, div, img);

        const h6=document.createElement("h5");
         h6.innerText=`${temps[i].temp} F`;
        div.appendChild(h5);
        div.appendChild(h6);
        timeContainer.appendChild(div);
    }
}

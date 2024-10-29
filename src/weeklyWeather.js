import {icon} from "./showIcon.js";
const week=document.querySelector("#week");
const h3=document.createElement("h3");
h3.innerText="Weather for Next 7 Days";
const divs=document.createElement("div");
divs.classList.add("weekly");
week.appendChild(h3);
week.appendChild(divs);

export function weeks(json){
    divs.innerHTML="";
        for(let i=0; i<7; i++){
            const div = document.createElement("div");
            div.classList.add("weekDiv");
            const h51=document.createElement("h5");
            let shortDate=json.days[i].datetime;
            h51.innerText=convert(shortDate).slice(4, 10);
    
            const h5=document.createElement("h5");
            h5.innerText=convert(shortDate).slice(0, 4);
          
            const img=document.createElement("img");
            img.classList.add("imgIconW");
            img.setAttribute("src", "");
             let weatherCondition = json.days[i].icon;
            icon(weatherCondition, div, img);
    
            const h6=document.createElement("h5");
             h6.innerText=`${json.days[i].temp} F`;
         
            div.appendChild(h5);
            div.appendChild(h51);
            div.appendChild(h6);
            divs.appendChild(div);
        }
    }
    
    function convert(shortDate){
        const year = parseInt(shortDate.slice(0, 4));
        const month =parseInt(shortDate.slice(5, 7))-1;
        const day = parseInt(shortDate.slice(8,10));
       let date = new Date(year, month, day);
       return date.toString();
    
    }
import {icon} from "./showIcon.js";
const week=document.querySelector("#week");
const h3=document.createElement("h3");
h3.innerText="Weather for Next 7 Days";
const divs=document.createElement("div");
divs.classList.add("weekly");
week.appendChild(h3);
week.appendChild(divs);


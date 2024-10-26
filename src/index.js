import "./styles.css";
import {url} from "./api.js";
import {render} from "./render.js";

const input = document.querySelector("input");
const form = document.querySelector("form");
const welcome = document.querySelector(".date");
const hi = document.createElement("h3");
const todayDate = document.createElement("div");
hi.innerText="Hi, There"
let date = new Date();
todayDate.innerText=`Today is: ${date.toString().slice(4, 15)}`;
welcome.append(hi);
welcome.append(todayDate);
render(url);

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




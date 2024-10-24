 import "./styles.css";
 import {url} from "./api.js";
 import {render} from "./render.js";

const input = document.querySelector("input");
const form = document.querySelector("form");

render();

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




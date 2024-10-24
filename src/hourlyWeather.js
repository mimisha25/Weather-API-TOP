const timeContainer = document.createElement("div");
timeContainer.classList.add("timeContainer");
document.querySelector("#day").appendChild(timeContainer);


export function hours(temps){
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

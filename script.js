let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

setInterval(()=>{

    let newDate = new Date();
    let h = newDate.getHours();
    let m = newDate.getMinutes();
    let s = newDate.getSeconds();


    if(h > 12){
        h =  h - 12 ;
    }
    if(h < 10){
        h =  "0" + h ;
    }

    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = h >= 12 ? "PM" : "AM";

   
},1000);




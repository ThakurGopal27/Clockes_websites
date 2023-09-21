const body = document.querySelector("body"),
hourhand = document.querySelector(".hour"),
minutehand = document.querySelector(".minute"),
secondhand = document.querySelector(".second");

const updateTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360;
        minToDeg = (date.getMinutes() / 60) * 360;
        hrToDeg = (date.getHours() / 12) * 360;

        secondhand.style.transform = `rotate(${secToDeg}deg)`;
        minutehand.style.transform = `rotate(${minToDeg}deg)`;
        hourhand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime,1000);

updateTime();

//Digital Clock:-

const updatewatch = () => {


let hours = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let duration = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h >= 12 ? "PM" : "AM";

h = (h >12 ) ? h-12 : h

h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s

hours.innerHTML = h;
minute.innerHTML = m; 
second.innerHTML = s;
ampm.innerHTML = am;
}

setInterval(updatewatch,1000);
updatewatch();
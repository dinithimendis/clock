const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clocks() {
    const date = new Date();
    const second = date.getSeconds() / 60;
    const minute = (second + date.getMinutes()) / 60;
    const hour = (minute + date.getHours()) / 12;

    rotateClockHand(secondHand, second);
    rotateClockHand(minuteHand, minute);
    rotateClockHand(hourHand, hour);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clocks, 1000);
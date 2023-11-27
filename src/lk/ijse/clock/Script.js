const hours = document.querySelector('.hours');

const hourElement = [];

//create numbers for hours
for (let i = 1; i <= 12; i++) {
    //console.log(i);
    hourElement.push(
       `<span><p>${i}</p></span>`
    );

}
hours.insertAdjacentHTML("afterbegin", hourElement.join(""));
console.log(hourElement);
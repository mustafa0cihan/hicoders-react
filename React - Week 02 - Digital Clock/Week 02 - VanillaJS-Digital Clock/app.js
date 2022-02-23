/**  
We have been requested to program two applications that show the current time. 
The first must be coded with vanilla javascript. The second one should be coded with react.
In this direction, we first code our clock as vanilla javascript.
1) Inside the div tag with the Clock class, we place div tags that will indicate the dot, the second, the minute and the hour.
2) Time elements are selected with document.querySelector method.
3) Current time values are obtained with new Date and get methods.
4) Time values are rendered visually using the transform property of CSS. In addition, CSS and HTML elements are visually edited.)
5) Finally, the current time value is transferred to the page with the setInterval method.
*/

const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function tiktak() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    sec.style.transform = `rotate(${180 + (second * 6)}deg)`
    min.style.transform = `rotate(${180 + (minute * 6)}deg)`
    hours.style.transform = `rotate(${180 + (hour * 30)}deg)`
}

setInterval(tiktak, 1000);
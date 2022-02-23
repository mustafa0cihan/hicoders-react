/**
We were asked to program two applications that display the current time. 
The first must be coded in vanilla javascript. Second one should be coded with react.
In this direction, we first coded our clock with vanilla javascript.

1) We are creating a js file named "Clock.js" in a folder named "Components".
2) We place our VanillaJs codes inside the "Clock" function.
3) We embed our "HTML" structure in the "return" command.
4) We place our CSS commands in the "index.css" file.
5) Finally, we export our Clock.js file and import it in the App.js folder.
*/

const App = () => {
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
    setInterval(tiktak, 1000)

    return (
        <div class="clock">
            <div class="secs"></div>
            <div class="mins"></div>
            <div class="hours"></div>
            <div class="dot"></div>
        </div>
    );
}

export default App;

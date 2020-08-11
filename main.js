var clockDiv = undefined;

function init()
{
    clockDiv = document.getElementById("display");
    oncePerSecond(updateClock);
}

// https://stackoverflow.com/questions/53891790/make-javascript-interval-synchronize-with-actual-time
function oncePerSecond(callback) {
    var timerFunc = function () {
        // get the current time rounded down to a whole second (with a 10% margin)
        var now = 1000 * Math.floor(Date.now() / 1000 + 0.1);
        // run the callback
        callback(now);
        // wait for the next whole second
        setTimeout(timerFunc, now + 1000 - Date.now());
    };
    timerFunc();
}


function updateClock()
{
    //console.log("Updated!")
    var cents = (dayPercent() * 100).toFixed(2);
    clockDiv.innerText = "¢" + (cents.toString());
}

window.addEventListener("load", init);
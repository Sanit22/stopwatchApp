// Initialise curr time to be 0
var msec = 0;
var sec = 0;
var min = 0;

//Initialise interval ids
var msecId;
var secId;
var minId;

// Start Timer
document.getElementById("start").addEventListener('click', function(){
    if(msecId != null){
        return;
    }
    msecId = setInterval(startMsec, 1);
    secId = setInterval(startSec, 1000);
    minId = setInterval(startMin, 60000);
});

// Stop Timer
document.getElementById("stop").addEventListener('click', function(){
    clearAllIntervals();
});

// Reset Timer
document.getElementById("reset").addEventListener('click', function(){
    clearAllIntervals();
    setAllDefault();
});

// Set to default 
function setAllDefault(){
    msec = 0;
    sec = 0;
    min = 0;
    document.getElementById("milliseconds").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("minutes").innerText = "00";
}

// clear intervals
function clearAllIntervals(){
    clearInterval(msecId);
    clearInterval(secId);
    clearInterval(minId);
    msecId = null;
    secId = null;
    minId = null;
}

// Start milliseconds
function startMsec(){
    msec += 1;
    let curr = document.getElementById("milliseconds");
    if(msec == 100){
        msec = 0;
    }
    else{
        if(msec < 10){
            curr.innerText = "0" + msec;
        }
        else{
            curr.innerText = "" + msec;
        }
    }
}

//Start seconds
function startSec(){
    sec += 1;
    let curr = document.getElementById("seconds");
    if(sec == 60){
        sec = 0;
    }
    else{
        if(sec < 10){
            curr.innerText = "0" + sec;
        }
        else{
            curr.innerText = "" + sec;
        }
    }
}

// Start Minutes
function startMin(){
    min += 1;
    let curr = document.getElementById("minutes");
    if(min == 60){
        min = 0;
    }
    else{
        if(min < 10){
            curr.innerText = "0" + min;
        }
        else{
            curr.innerText = "" + min;
        }
    }
}





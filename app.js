
var min = 00 ;
var sec = 00;
var msec = 00;

var minHeading = document.getElementById("min");
var SecHeading = document.getElementById("sec");
var MiliSecHeading = document.getElementById("msec");
var startbutton = document.getElementById("startb")
var interval;

function timer(){
    msec++
    MiliSecHeading.innerHTML = msec;
    if( msec >= 100){
        sec++
        SecHeading.innerHTML = sec;
        msec = 00;
        
    }else if ( sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 00;
    }
}
function start(){
interval = setInterval(timer,10);
startbutton.disabled = true;
}

function stop(){
    clearInterval(interval);
    startbutton.disabled = false;
}

function reset(){
    clearInterval(interval);
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML = min;
    SecHeading.innerHTML = sec;
    MiliSecHeading.innerHTML = msec;
    startbutton.disabled = false;    
    

}
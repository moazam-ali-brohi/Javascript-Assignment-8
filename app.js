
var min = 00 ;
var sec = 00;
var mili = 00;

var minHeading = document.getElementById("min");
var SecHeading = document.getElementById("sec");
var MiliHeading = document.getElementById("mili");
var strtBtn = document.getElementById("startbtn")
var interval;

function timer(){
    mili++
    MiliHeading.innerHTML = mili;
    if( mili >= 100){
        sec++
        SecHeading.innerHTML = sec;
        mili = 00;
        
    }else if ( sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 00;
    }
}
function start(){
interval = setInterval(timer,10);
strtBtn.disabled = true;
}

function stop(){
    clearInterval(interval);
    strtBtn.disabled = false;
}

function reset(){
    clearInterval(interval);
    min = 00;
    sec = 00;
    mili = 00;
    minHeading.innerHTML = min;
    SecHeading.innerHTML = sec;
    MiliHeading.innerHTML = mili;
    strtBtn.disabled = false;    
    }
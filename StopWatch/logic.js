let m = document.getElementById('m');
let s = document.getElementById('s');
let ms = document.getElementById('ms');
let milliSecond = 0;
let second = 0;
let minute = 0;
let timer;


// ms 단위로 올라가는 time 함수
function startTime() {
    milliSecond++;

    if(milliSecond <= 9) {
        ms.innerHTML = '0' + milliSecond;
    } else {
        ms.innerHTML = milliSecond;
    }


    if (milliSecond >= 99) {
        second++;
        milliSecond = 0;
    }

    if(second <= 9) {
        s.innerHTML = '0' + second;
    } else {
        s.innerHTML = second;
    }

    if (second > 59) {
        minute++;
        second=0;

    }

    if(minute <= 9) {
        m.innerHTML = '0' + minute;
    } else {
        m.innerHTML = minute;
    }

}

// reset interval method
function startButton() {
    clearInterval(timer);
    timer = setInterval(startTime, 10);
}
function stopButton() {
    clearInterval(timer);
}

function resetButton() {
    clearInterval(timer);
    minute = 0;
    second = 0;
    milliSecond = 0;
    m.innerHTML = '00';
    s.innerHTML = '00';
    ms.innerHTML = '00';
}

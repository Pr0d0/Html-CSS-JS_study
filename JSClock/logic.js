function startTime() {
    const day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let timeSession = "AM";

    if(h > 12){
        h -= 12;
        timeSession = "PM";
    }

    h = (h<10) ? "0"+ h : h;
    m = (m<10) ? "0"+ m : m;
    s = (s<10) ? "0"+ s : s;

    document.getElementById('js_clock').textContent = h + ":" + m + ":" + s + " " + timeSession;

    setTimeout(startTime, 1000);
}

startTime()
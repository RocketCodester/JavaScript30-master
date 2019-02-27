function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    setInterval(() => {
        const secondsLeft = (then - Date.now()) / 1000;
    }, 1000)
    console.log({now, then});
    setInterval(function() {
        seconds--;
    }, 1000);
}
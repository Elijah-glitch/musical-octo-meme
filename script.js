function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days in milliseconds
    const timeRemaining = targetDate - now;

    const secondsRemaining = Math.floor(timeRemaining / 1000);

    const days = Math.floor(secondsRemaining / (24 * 60 * 60));
    const hours = Math.floor((secondsRemaining % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
    const seconds = secondsRemaining % 60;

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
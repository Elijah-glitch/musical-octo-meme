<!DOCTYPE html>
<html>
<head>
    <title>Countdown Timer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #333;
            color: #fff;
            padding: 20px;
        }
        .countdown-container {
            margin-top: 50px;
        }
        .countdown {
            font-size: 3em;
            display: inline-block;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border-radius: 5px;
        }
    </style>
    <script>
        function getTimeRemaining() {
            var now = new Date();
            var targetDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days in milliseconds
            var timeRemaining = targetDate - now;
            
            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
            return {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }
        
        function updateCountdown() {
            var countdownElem = document.getElementById("countdown");
            var timeRemaining = getTimeRemaining();
            
            countdownElem.innerHTML = `${timeRemaining.days} days ${timeRemaining.hours} hours ${timeRemaining.minutes} minutes ${timeRemaining.seconds} seconds`;
        }
        
        setInterval(updateCountdown, 1000);
    </script>
</head>
<body>
    <div class="header">
        <h1>Countdown Timer</h1>
    </div>
    <div class="countdown-container">
        <div class="countdown" id="countdown">
            <!-- Countdown will be displayed here -->
        </div>
    </div>
</body>
</html>
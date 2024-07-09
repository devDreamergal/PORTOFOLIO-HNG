document.addEventListener('DOMContentLoaded', () => {
    // Your Slack name and email
    const slackName = "YourSlackName"; 
    const slackEmail = "your.email@example.com";
    
    // Set Slack name and email
    document.getElementById('slackName').textContent = slackName;
    document.getElementById('slackEmail').textContent = slackEmail;

    // Set current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25);
        document.getElementById('currentTime').textContent = utcTime;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        document.getElementById('currentDay').textContent = currentDay;
    }

    // Update time every second
    setInterval(updateTime, 1000);
});

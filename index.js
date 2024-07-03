
document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
        if (timeElement) {
            timeElement.textContent = utcTime;
        } else {
            console.error('Element with data-testid="currentTimeUTC" not found.');
        }
    }

    
    function updateDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const currentDay = days[now.getUTCDay()];
        const dayElement = document.querySelector('[data-testid="currentDay"]');
        if (dayElement) {
            dayElement.textContent = currentDay;
        } else {
            console.error('Element with data-testid="currentDay" not found.');
        }
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 60000); 
});

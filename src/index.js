class CountdownTimer {
    constructor({ selector, targetDate} ) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerElem = document.querySelector(selector);
        this.TimerElemntsId = this.timerElem.querySelectorAll(".value");
        this.timerId = null;
        this.start();
    }
    start() {
        this.timerId = setInterval(() => {
            const nowtTime = Date.now();
            const { days, hours, mins, secs } = this.getTimeComponents(this.targetDate - nowtTime);
            this.TimerElemntsId.forEach(i => {
                if (i.dataset.value === "days") { i.textContent = days }
                if (i.dataset.value === "hours") { i.textContent = hours }
                if (i.dataset.value === "mins") { i.textContent = mins }
                if (i.dataset.value === "secs") { i.textContent = secs }
            })
        }, 1000);
    }
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        return { days, hours, mins, secs };
    }
}
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021, 12:03:45')});

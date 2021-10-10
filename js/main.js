import refs from '../js/refs.js';
const { daysTimer, hoursTimer, minsTimer, secsTimer } = refs;

class CountdownTimer {
  constructor(targetDate, markup) {
    this.markup = markup;
    this.targetDate = targetDate;
    this.intID = null;
    this.deltaTime = 0;
  }
  start() {
    this.intID = setInterval(() => {
      this.deltaTime = this.targetDate - Date.now();
      //console.log(this.targetDate);
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      this.insertValues(days, hours, mins, secs);
    }, 1000);
  }

  // ===========
  pad(value) {
    return String(value).padStart(2, '0');
  }
  insertValues(d, h, m, s) {
    const { daysTimer, hoursTimer, minsTimer, secsTimer } = this.markup;
    daysTimer.textContent = d;
    hoursTimer.textContent = h;
    minsTimer.textContent = m;
    secsTimer.textContent = s;
  }
  // ===========
}

const myTimer = new CountdownTimer(new Date('Jan 1, 2022'), {
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
  daysTimer,
  hoursTimer,
  minsTimer,
  secsTimer,
});

myTimer.start();

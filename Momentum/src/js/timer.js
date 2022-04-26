(function (global) {
  class Clock {
    constructor (el) {
      let document = global.document;
      this.el = document.querySelector(el);
      this.months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    addZero (i) {
      if (i < 10) {
        i = '0' + i;
        return i;
      }
      return i;
    }
    updateClock () {
      let now, year, month, dayNo, day, hour, minute, second, result, self;
      now = new global.Date();
      year = now.getFullYear();
      month = now.getMonth();
      dayNo = now.getDay();
      day = now.getDate();
      hour = this.addZero(now.getHours());
      minute = this.addZero(now.getMinutes());
      second = this.addZero(now.getSeconds());
      result = `${hour}:${minute}:${second}<br/>${day} ${this.months[month]} ${year}, ${this.days[dayNo]}`;
      self = this;
      self.el.innerHTML = result;
      global.setTimeout(function () {
        self.updateClock();
      }, 1000);
    }
  }
  global.Clock = Clock;
})(window);

function addEvent (elem, fn, useCapture) {
  if (elem) {
    elem.addEventListener(fn, useCapture);
  } else if (elem) {
    elem.attachEvent('on' + fn);
  }
}

addEvent(window, 'load', function () {
  if (document.querySelector('.time')) {
    var clock = new Clock('.time');
    clock.updateClock();
  }
});

export default addEvent;

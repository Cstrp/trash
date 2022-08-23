import './view/styles/common.scss';
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Template} from '@/view/Template';

document.addEventListener('DOMContentLoaded', () => {
  const calendarEl: HTMLElement = document.getElementById('calendar')!;

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
    windowResize(arg) {
      console.log(`The calendar has adjusted to a window resize. Current view: ${arg.view.type}`);
    },
    expandRows: true,
    aspectRatio: 31,
  });

  calendar.render();
});

new Template(document.body, 'div', 'asd', null, {id: 'calendar'});

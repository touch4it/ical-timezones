const app = require('../index');

const expectedTimezoneObject = [
  'BEGIN:VCALENDAR',
  'PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN',
  'VERSION:2.0',
  'BEGIN:VTIMEZONE',
  'TZID:Europe/Bratislava',
  'TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Bratislava',
  'X-LIC-LOCATION:Europe/Bratislava',
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:+0100',
  'TZOFFSETTO:+0200',
  'TZNAME:CEST',
  'DTSTART:19700329T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0200',
  'TZOFFSETTO:+0100',
  'TZNAME:CET',
  'DTSTART:19701025T030000',
  'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
  'END:STANDARD',
  'END:VTIMEZONE',
  'END:VCALENDAR',
  '',
].join('\n');

const expectedTimezoneComponent = [
  'BEGIN:VTIMEZONE',
  'TZID:Europe/Bratislava',
  'TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Bratislava',
  'X-LIC-LOCATION:Europe/Bratislava',
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:+0100',
  'TZOFFSETTO:+0200',
  'TZNAME:CEST',
  'DTSTART:19700329T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0200',
  'TZOFFSETTO:+0100',
  'TZNAME:CET',
  'DTSTART:19701025T030000',
  'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
  'END:STANDARD',
  'END:VTIMEZONE',
  '',
].join('\n');

test('Correct timezone object for "Europe/Bratislava" timezone', () => {
  expect(app.getVtimezone('Europe/Bratislava')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "Europe/Bratislava" timezone', () => {
  expect(app.getVtimezoneComponent('Europe/Bratislava')).toBe(expectedTimezoneComponent);
});

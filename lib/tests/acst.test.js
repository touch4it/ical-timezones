const app = require('../index');

const expectedTimezoneObject = [
  'BEGIN:VCALENDAR',
  'PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN',
  'VERSION:2.0',
  'BEGIN:VTIMEZONE',
  'TZID:Australian Central Standard Time',
  'X-LIC-LOCATION:Australian Central Standard Time',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0930',
  'TZOFFSETTO:+0930',
  'TZNAME:ACST',
  'DTSTART:19700101T000000',
  'END:STANDARD',
  'END:VTIMEZONE',
  'END:VCALENDAR',
  '',
].join('\n');

const expectedTimezoneComponent = [
  'BEGIN:VTIMEZONE',
  'TZID:Australian Central Standard Time',
  'X-LIC-LOCATION:Australian Central Standard Time',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0930',
  'TZOFFSETTO:+0930',
  'TZNAME:ACST',
  'DTSTART:19700101T000000',
  'END:STANDARD',
  'END:VTIMEZONE',
  '',
].join('\n');

test('Correct timezone object for "Australian Central Standard Time" timezone', () => {
  expect(app.getVtimezone('Australian Central Standard Time')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "Australian Central Standard Time" timezone', () => {
  expect(app.getVtimezoneComponent('Australian Central Standard Time')).toBe(expectedTimezoneComponent);
});

test('Correct timezone object for "AUS Central Standard Time" timezone', () => {
  expect(app.getVtimezone('AUS Central Standard Time')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "AUS Central Standard Time" timezone', () => {
  expect(app.getVtimezoneComponent('AUS Central Standard Time')).toBe(expectedTimezoneComponent);
});

test('Correct timezone object for "Cen Australia Standard Time" timezone', () => {
  expect(app.getVtimezone('Cen Australia Standard Time')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "Cen Australia Standard Time" timezone', () => {
  expect(app.getVtimezoneComponent('Cen Australia Standard Time')).toBe(expectedTimezoneComponent);
});

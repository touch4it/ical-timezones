const app = require('../index');

const expectedTimezoneObject = [
  'BEGIN:VCALENDAR',
  'PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN',
  'VERSION:2.0',
  'BEGIN:VTIMEZONE',
  'TZID:Etc/GMT',
  'TZURL:http://tzurl.org/zoneinfo-outlook/Etc/GMT',
  'X-LIC-LOCATION:Etc/GMT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0000',
  'TZOFFSETTO:+0000',
  'TZNAME:GMT',
  'DTSTART:19700101T000000',
  'END:STANDARD',
  'END:VTIMEZONE',
  'END:VCALENDAR',
  '',
].join('\n');

const expectedTimezoneComponent = [
  'BEGIN:VTIMEZONE',
  'TZID:Etc/GMT',
  'TZURL:http://tzurl.org/zoneinfo-outlook/Etc/GMT',
  'X-LIC-LOCATION:Etc/GMT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0000',
  'TZOFFSETTO:+0000',
  'TZNAME:GMT',
  'DTSTART:19700101T000000',
  'END:STANDARD',
  'END:VTIMEZONE',
  '',
].join('\n');

test('Correct timezone object for "GMT" timezone', () => {
  expect(app.getVtimezone('GMT')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "GMT" timezone', () => {
  expect(app.getVtimezoneComponent('GMT')).toBe(expectedTimezoneComponent);
});

test('Correct timezone object for "Etc/GMT" timezone', () => {
  expect(app.getVtimezone('Etc/GMT')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "Etc/GMT" timezone', () => {
  expect(app.getVtimezoneComponent('Etc/GMT')).toBe(expectedTimezoneComponent);
});

test('Correct timezone object for "GMT Standard Time" timezone', () => {
  expect(app.getVtimezone('GMT Standard Time')).toBe(expectedTimezoneObject);
});

test('Correct timezone component for "GMT Standard Time" timezone', () => {
  expect(app.getVtimezoneComponent('GMT Standard Time')).toBe(expectedTimezoneComponent);
});

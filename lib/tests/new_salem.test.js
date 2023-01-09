const app = require('../index.js');

const expectedTimezoneObject = [
  'BEGIN:VCALENDAR',
  'PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN',
  'VERSION:2.0',
  'BEGIN:VTIMEZONE',
  'TZID:America/North_Dakota/New_Salem',
  'TZURL:http://tzurl.org/zoneinfo-outlook/America/North_Dakota/New_Salem',
  'X-LIC-LOCATION:America/North_Dakota/New_Salem',
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:-0600',
  'TZOFFSETTO:-0500',
  'TZNAME:CDT',
  'DTSTART:19700308T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:-0500',
  'TZOFFSETTO:-0600',
  'TZNAME:CST',
  'DTSTART:19701101T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
  'END:STANDARD',
  'END:VTIMEZONE',
  'END:VCALENDAR',
  '',
].join('\n');

const expectedTimezoneComponent = [
  'BEGIN:VTIMEZONE',
  'TZID:America/North_Dakota/New_Salem',
  'TZURL:http://tzurl.org/zoneinfo-outlook/America/North_Dakota/New_Salem',
  'X-LIC-LOCATION:America/North_Dakota/New_Salem',
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:-0600',
  'TZOFFSETTO:-0500',
  'TZNAME:CDT',
  'DTSTART:19700308T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:-0500',
  'TZOFFSETTO:-0600',
  'TZNAME:CST',
  'DTSTART:19701101T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
  'END:STANDARD',
  'END:VTIMEZONE',
  '',
].join('\n');

test('Correct timezone object for "America/North_Dakota/New_Salem" timezone', () => {
  expect(app.getVtimezone('America/North_Dakota/New_Salem')).toBe(expectedTimezoneObject);
});

test('Correct timezone object for "America/North_Dakota/New_Salem" timezone', () => {
  expect(app.getVtimezoneComponent('America/North_Dakota/New_Salem')).toBe(expectedTimezoneComponent);
});

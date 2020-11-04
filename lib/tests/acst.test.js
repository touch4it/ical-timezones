const app = require('../index');

const expectedTimezoneObject = `BEGIN:VCALENDAR\r
PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN\r
VERSION:2.0\r
BEGIN:VTIMEZONE\r
TZID:Australian Central Standard Time\r
X-LIC-LOCATION:Australian Central Standard Time\r
BEGIN:STANDARD\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700101T000000\r
END:STANDARD\r
END:VTIMEZONE\r
END:VCALENDAR\r
`;

const expectedTimezoneComponent = `BEGIN:VTIMEZONE\r
TZID:Australian Central Standard Time\r
X-LIC-LOCATION:Australian Central Standard Time\r
BEGIN:STANDARD\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700101T000000\r
END:STANDARD\r
END:VTIMEZONE\r
`;

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

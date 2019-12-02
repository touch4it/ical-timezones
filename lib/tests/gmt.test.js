const app = require('../app')

const expected = `BEGIN:VCALENDAR\r
PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN\r
VERSION:2.0\r
BEGIN:VTIMEZONE\r
TZID:Etc/GMT\r
TZURL:http://tzurl.org/zoneinfo-outlook/Etc/GMT\r
X-LIC-LOCATION:Etc/GMT\r
BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD\r
END:VTIMEZONE\r
END:VCALENDAR\r
`;

test('Correct timezone object for "GMT" timezone', () => {
  expect(app.getVtimezone('GMT')).toBe(expected);
});

test('Correct timezone object for "Etc/GMT" timezone', () => {
  expect(app.getVtimezone('Etc/GMT')).toBe(expected);
});

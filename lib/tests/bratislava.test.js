const app = require('../index');

const expected = `BEGIN:VCALENDAR\r
PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN\r
VERSION:2.0\r
BEGIN:VTIMEZONE\r
TZID:Europe/Bratislava\r
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Bratislava\r
X-LIC-LOCATION:Europe/Bratislava\r
BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT\r
BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD\r
END:VTIMEZONE\r
END:VCALENDAR\r
`;

test('Correct timezone object for "Europe/Bratislava" timezone', () => {
  expect(app.getVtimezone('Europe/Bratislava')).toBe(expected);
});

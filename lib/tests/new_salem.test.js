const app = require('../index');

const expectedTimezoneObject = `BEGIN:VCALENDAR\r
PRODID:-//tzurl.org//NONSGML Olson 2018g-rearguard//EN\r
VERSION:2.0\r
BEGIN:VTIMEZONE\r
TZID:America/North_Dakota/New_Salem\r
TZURL:http://tzurl.org/zoneinfo-outlook/America/North_Dakota/New_Salem\r
X-LIC-LOCATION:America/North_Dakota/New_Salem\r
BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT\r
BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD\r
END:VTIMEZONE\r
END:VCALENDAR\r
`;

const expectedTimezoneComponent = `BEGIN:VTIMEZONE\r
TZID:America/North_Dakota/New_Salem\r
TZURL:http://tzurl.org/zoneinfo-outlook/America/North_Dakota/New_Salem\r
X-LIC-LOCATION:America/North_Dakota/New_Salem\r
BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT\r
BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD\r
END:VTIMEZONE\r
`;

test('Correct timezone object for "America/North_Dakota/New_Salem" timezone', () => {
  expect(app.getVtimezone('America/North_Dakota/New_Salem')).toBe(expectedTimezoneObject);
});

test('Correct timezone object for "America/North_Dakota/New_Salem" timezone', () => {
  expect(app.getVtimezoneComponent('America/North_Dakota/New_Salem')).toBe(expectedTimezoneComponent);
});

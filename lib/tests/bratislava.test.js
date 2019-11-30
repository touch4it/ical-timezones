const app = require('../app');

test('Correct timezone object for "Europe/Bratislava" timezone', () => {
  const output = app.getVtimezone('Europe/Bratislava');
  const expected = `BEGIN:VTIMEZONE\r
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
END:VTIMEZONE`;

  expect(output).toBe(expected);
});

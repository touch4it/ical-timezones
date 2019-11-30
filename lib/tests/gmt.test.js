const app = require('../app');

test('Correct timezone object for "GMT" timezone', () => {
  const output = app.getVtimezone('GMT');
  const expected = `BEGIN:VTIMEZONE\r
TZID:Etc/GMT\r
TZURL:http://tzurl.org/zoneinfo-outlook/Etc/GMT\r
X-LIC-LOCATION:Etc/GMT\r
BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD\r
END:VTIMEZONE`;

  expect(output).toBe(expected);
});

test('Correct timezone object for "Etc/GMT" timezone', () => {
  const output = app.getVtimezone('Etc/GMT');
  const expected = `BEGIN:VTIMEZONE\r
TZID:Etc/GMT\r
TZURL:http://tzurl.org/zoneinfo-outlook/Etc/GMT\r
X-LIC-LOCATION:Etc/GMT\r
BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD\r
END:VTIMEZONE`;

  expect(output).toBe(expected);
});

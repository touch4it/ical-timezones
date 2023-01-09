const app = require('../index.js');

describe('Validation', () => {
  test('Valid UTC format', async () => {
    expect(app.timezoneExists('UTC-12:00')).toBe(true);
    expect(app.timezoneExists('UTC-11:00')).toBe(true);
    expect(app.timezoneExists('UTC-10:00')).toBe(true);
    expect(app.timezoneExists('UTC-09:30')).toBe(true);
    expect(app.timezoneExists('UTC-09:00')).toBe(true);
    expect(app.timezoneExists('UTC-08:00')).toBe(true);
    expect(app.timezoneExists('UTC-07:00')).toBe(true);
    expect(app.timezoneExists('UTC-06:00')).toBe(true);
    expect(app.timezoneExists('UTC-05:00')).toBe(true);
    expect(app.timezoneExists('UTC-04:00')).toBe(true);
    expect(app.timezoneExists('UTC-03:30')).toBe(true);
    expect(app.timezoneExists('UTC-03:00')).toBe(true);
    expect(app.timezoneExists('UTC-02:00')).toBe(true);
    expect(app.timezoneExists('UTC-01:00')).toBe(true);
    expect(app.timezoneExists('UTC-00:00')).toBe(true);
    expect(app.timezoneExists('UTC+00:00')).toBe(true);
    expect(app.timezoneExists('UTC+01:00')).toBe(true);
    expect(app.timezoneExists('UTC+02:00')).toBe(true);
    expect(app.timezoneExists('UTC+03:00')).toBe(true);
    expect(app.timezoneExists('UTC+03:30')).toBe(true);
    expect(app.timezoneExists('UTC+04:00')).toBe(true);
    expect(app.timezoneExists('UTC+04:30')).toBe(true);
    expect(app.timezoneExists('UTC+05:00')).toBe(true);
    expect(app.timezoneExists('UTC+05:30')).toBe(true);
    expect(app.timezoneExists('UTC+05:45')).toBe(true);
    expect(app.timezoneExists('UTC+06:00')).toBe(true);
    expect(app.timezoneExists('UTC+06:30')).toBe(true);
    expect(app.timezoneExists('UTC+07:00')).toBe(true);
    expect(app.timezoneExists('UTC+08:00')).toBe(true);
    expect(app.timezoneExists('UTC+08:45')).toBe(true);
    expect(app.timezoneExists('UTC+09:00')).toBe(true);
    expect(app.timezoneExists('UTC+09:30')).toBe(true);
    expect(app.timezoneExists('UTC+10:00')).toBe(true);
    expect(app.timezoneExists('UTC+10:30')).toBe(true);
    expect(app.timezoneExists('UTC+11:00')).toBe(true);
    expect(app.timezoneExists('UTC+12:00')).toBe(true);
    expect(app.timezoneExists('UTC+12:45')).toBe(true);
    expect(app.timezoneExists('UTC+13:00')).toBe(true);
    expect(app.timezoneExists('UTC+14:00')).toBe(true);
  });

  test('Invalid UTC format', async () => {
    expect(app.timezoneExists('UTC-13:00')).toBe(false);
    expect(app.timezoneExists('UTC-11:45')).toBe(false);
    expect(app.timezoneExists('UTC-11:30')).toBe(false);
    expect(app.timezoneExists('UTC-11:15')).toBe(false);
    expect(app.timezoneExists('UTC+15:00')).toBe(false);
    expect(app.timezoneExists('UTC+11:45')).toBe(false);
    expect(app.timezoneExists('UTC+11:30')).toBe(false);
    expect(app.timezoneExists('UTC+11:15')).toBe(false);
  });

  test('Valid TZ name', async () => {
    expect(app.timezoneExists('Europe/Bratislava')).toBe(true);
    expect(app.timezoneExists('Africa/Addis Ababa')).toBe(true);
    expect(app.timezoneExists('Africa/Addis_Ababa')).toBe(true);
    expect(app.timezoneExists('US/East-Indiana')).toBe(true);
    expect(app.timezoneExists('North Asia East Standard Time')).toBe(true);
    expect(app.timezoneExists('CET')).toBe(true);
    expect(app.timezoneExists('CEST')).toBe(true);
  });

  test('Invalid TZ name', async () => {
    expect(app.timezoneExists('Europe/Nowhere')).toBe(false);
  });
});

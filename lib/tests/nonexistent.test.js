const app = require('../index.js');

describe('Sync', () => {
  test('Correct timezone object for nonexistent timezone', () => {
    expect(app.getVtimezone('nonexistent')).toBe(null);
  });
});

describe('Async', () => {
  test('Reject for nonexistent timezone', async () => {
    expect.assertions(1);
    await expect(app.getVtimezoneAsync('nonexistent')).rejects.toThrowError(Error);
  });
});

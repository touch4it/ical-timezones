const app = require('../app');

test('Correct timezone object for nonexistent timezone', () => {
  expect(app.getVtimezone('nonexistent')).toBe(null);
});

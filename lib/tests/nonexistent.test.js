const app = require('../index');

test('Correct timezone object for nonexistent timezone', () => {
  expect(app.getVtimezone('nonexistent')).toBe(null);
});

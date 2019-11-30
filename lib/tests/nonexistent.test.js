const app = require('../app');

test('Correct timezone object for nonexistent timezone', () => {
  const output = app.getVtimezone('nonexistent');

  expect(output).toBe(null);
});

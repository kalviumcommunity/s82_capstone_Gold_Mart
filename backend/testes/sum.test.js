const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds -1 + -1 to equal -2', () => {
  expect(sum(-1, -1)).toBe(-2);
});

test('adds 100 + 200 to equal 300', () => {
  expect(sum(100, 200)).toBe(300);
});

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

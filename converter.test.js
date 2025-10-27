const { toRoman, fromRoman } = require('./index');

test('Convierte número a romano', () => {
  expect(toRoman(4)).toBe("IV");
  expect(toRoman(9)).toBe("IX");
  expect(toRoman(2024)).toBe("MMXXIV");
});

test('Convierte romano a número', () => {
  expect(fromRoman("IV")).toBe(4);
  expect(fromRoman("IX")).toBe(9);
  expect(fromRoman("MMXXIV")).toBe(2024);
});

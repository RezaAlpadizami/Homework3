const { Convert } = require("../src/scripts/convert");

const convert = new Convert();

test("fromCelcius 2 equal 35.6 far ", () => {
  expect(convert.fromCelcius("cel", 2)).toBe(35.6);
});

test("fromReamur  2 equal 36.5 far", () => {
  expect(convert.fromReamur("rea", 2)).toBe(36.5);
});
test("fromFarenheit  4 equal -15.5 cel", () => {
  expect(convert.fromFarenheit("far", 4)).toBe(-15.5);
});

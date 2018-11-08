var approximateFraction = require("../index.js");

describe("approximateFraction", function() {

	test("Throws error on invalid input", function() {
		expect(function() {
			approximateFraction("beef");
		}).toThrowError("Must pass a number. Received beef (string)");
		expect(function() {
			approximateFraction();
		}).toThrowError("Must pass a number. Received undefined (undefined)");
		expect(function() {
			approximateFraction(NaN);
		}).toThrowError("Number must not be NaN or Infinity");
		expect(function() {
			approximateFraction(-Infinity);
		}).toThrowError("Number must not be NaN or Infinity");
	});

	test("Returns the correct value for positive number", function() {
		expect(approximateFraction(Math.PI)).toEqual({
			"numerator": 22,
			"denominator": 7
		});
	});

	test("Returns the correct value for negative number", function() {
		expect(approximateFraction(-Math.PI)).toEqual({
			"numerator": -22,
			"denominator": 7
		});
	});

	describe("testDenominator", function() {
		var testDenominator = approximateFraction.testDenominator;
		test("Returns false when no numerator is possible within the error", function() {
			expect(testDenominator(0.21, 0.1, 2)).toBe(false);
		});
		test("Returns object when numerator is found within the error", function() {
			expect(testDenominator(0.21, 0.1, 4)).toEqual({
				"numerator": 1,
				"denominator": 4
			});
		});
	});
});
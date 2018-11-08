// Function will find the fraction with the lowest denominator that is still within maxError of the actual decimal

// Example:
// getApproximateFraction(3.14159265, 0.01)

// Example output:
// {
// 	"numerator": 22,
// 	"denominator": 7
// }

function approximateFraction(decimal, maxError = 0.02) {
	if (typeof decimal !== "number") {
		throw new Error("Must pass a number. Received " + decimal + " (" + typeof decimal + ")");
	}
	if (isNaN(decimal) || Math.abs(decimal) === Infinity) {
		throw new Error("Number must not be NaN or Infinity");
	}

	var wholePart = Math.floor(decimal);
	var decimalPart = decimal - wholePart;

	var currentDenominator = 0;
	var testDenominatorResult = false;
	do {
		currentDenominator++;
		testDenominatorResult = testDenominator(decimalPart, maxError, currentDenominator);
	} while (testDenominatorResult === false);

	var approximateFraction = {
		"numerator": wholePart * testDenominatorResult.denominator + testDenominatorResult.numerator,
		"denominator": testDenominatorResult.denominator
	};

	return approximateFraction;
}

function testDenominator(decimalPart, maxError, denominator) {
	for (var numerator = 0; numerator <= denominator; numerator++) {
		var approximateValue = numerator / denominator;
		if (Math.abs(approximateValue - decimalPart) <= maxError) {
			return {
				numerator,
				denominator
			}
		}
	}

	return false;
}

approximateFraction.testDenominator = testDenominator; // for testing
module.exports = approximateFraction;

if (require.main === module) {
	var result = approximateFraction(Number(process.argv[2]), process.argv[3]);
	console.log(result.numerator + "/" + result.denominator);
}
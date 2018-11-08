# Approximate Fraction from Decimal

This simple function will find the fraction with the lowest denominator that is within a maximum error of a decimal value.

You might want to do this to simplify a number for an audience. For instance, your model says that something has a probability of 0.432732453, but you don't want to display this confusing number to your reader. You can use this function to instead display a close fraction, 3/7.

```
approximateFraction(number, [maxError = 0.02])
```

Return an object with two keys: `numerator` and `denominator`.

Example usage:
```
var approximateFraction = require("approximate-fraction-from-decimal");
approximateFraction(Math.PI, 0.01)
```

Example output:
```
{
	"numerator": 22,
	"denominator": 7
}
```

Another example:
```
var approximateFraction = require("approximate-fraction-from-decimal");
approximateFraction(-0.9435)
```

Another example output:
```
{
	"numerator": -13,
	"denominator": 14
}
```


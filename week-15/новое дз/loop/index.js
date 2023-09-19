let numbers = [];
let i = -10;
while (i < 11) {
	numbers.push(i);
	i++;
}
console.log(numbers);

let positiveNumbers = [];
for (num of numbers) {
	if (num < 0) {
	} else {
		positiveNumbers.push(num);
	}
}
console.log(positiveNumbers);

let squareNumbers = [];
for (num of positiveNumbers) {
	num = Math.pow(num, 2);
	squareNumbers.push(num);
}
console.log(squareNumbers);

squareNumbers.sort(function (a, b) {
	return b - a;
});

numbers = squareNumbers;
console.log(numbers);

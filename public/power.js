/*
  This function should accept two numbers as parameters.
  It should return the value of the numbers multiplied together.
*/

function multiply(a, b) {
	return a * b;
}

/*
  This function should accept two numbers as parameters.
  We can assume that both numbers are positive integers.
  It should return the value of the base, raised to the exponent-th power.
  You should make use of the multiply() function you just wrote.
*/

function power(base, exponent) {
	
	var counter = 0
	var value = 1

	while (counter < exponent) {

		value = multipy(value, base)
		counter = counter++
	}
}




/*

5^4

counter	0   1   2   3   4
value	1   5  25  125  625

-----------
Note to self: This is a given and wasn't added bc it's assumed that all integers
are positive:
	if power === 0
		return 1;
-----------
	
Just a math FYI 
General math exponent rule - derivatives	
	x^n = n*x^n-1

*/


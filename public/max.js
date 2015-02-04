/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/

function max(a, b) {

	if (a > b) {
		return a;
	}

	return b;

}


/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/

function maxOfThree(a, b, c) {

	return max(max(a, b), c);

}


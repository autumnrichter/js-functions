/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter) {
	
	if (["a", "e", "i", "o", "u"].indexOf(letter.toLowerCase()) > -1) {

		return true;
	}

	return false;

}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {

	var count = 0;
	var numberOfVowels = 0;

	while (count < word.length) {

		var letter = word[count];

		var isItActuallyAVowel = isVowel(letter);

		if (isItActuallyAVowel === true) {
			numberOfVowels++;
		}
			
		count++;
	}

	return numberOfVowels;

}

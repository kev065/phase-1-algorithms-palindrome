function isPalindrome(word) {

  // Write your algorithm here
  let wordReversedArr = [];
  for (let i = word.length + 1; i > -1; i--) {
    wordReversedArr.push(word[i]);
  }

  let reversedWord = wordReversedArr.join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("word")


/* 
Add your pseudocode here
Form an array consisting of the characters from the word, arranged in reverse order.
Utilize a backward-counting for loop to insert each letter into a new array, effectively reversing the order.
Combine the letters of the reversed array to form a single word.
If the input word matches the reversed word, return true; Otherwise, return false.
*/

/*
Add written explanation of your solution here
  To check if a word is a palindrome, I wrote a function that takes a word as an argument. 
  I made a new array to store the letters of the word in reverse order. 
  I looped through the word and added each letter to the new array from the end to the beginning. 
  I joined the new array into a single word and compared it with the original word. 
  If they are the same, the function returns true. Otherwise, it returns false.
*/ 

// You can run `node index.js` to view these console logs.
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
let myArr = str.split(' ');
let newArray = [];

for (let i = 0; i < myArr.length; i++){
  newArray.push(myArr[i].charAt(0).toUpperCase()+myArr[i].slice(1));
}
return newArray.join(' ');
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
 let strSplit = str.split(' ');
 let longestWord = strSplit[0];
 for (let i = 0; i < strSplit.length; i++){
   if(strSplit[i].length > longestWord.length){
     longestWord = strSplit[i];
   }
 }
 return longestWord;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function country(array){
  let longestWord = array[0];
  for (let i = 0; i < array.length; i++){
    if(array[i].length > longestWord.length){
      longestWord = array[i];
    }
  }
  return longestWord;
  }


console.log(
  country(["Australia", "Germany", "United States of America"])
);

// let obj1 = {
//     name :"fasi",
//     city : {
//         cityName : "karachi"
//     }
// }
// let obj2 = {
//     name :"husain"
// }
// // obj1.name = "shakor"

// let n = JSON.parse(JSON.stringify(obj1));
// n.name = "izhan"
// n.city.cityName = "sindh"
// console.log(obj1);
// console.log(n);

// let a = "b";
// let b = "c";
// a = b
// console.log(a);


// let str = "my name is hasnain"

// let camelCase = str.split(" ").map(data => data.slice(0,1).toUpperCase() + data.slice(1).toLowerCase()).join(" ")
// console.log(camelCase);


// let str = "my name is hasnain";

// let capitalizedStr = str.split(" ").map(word => {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }).join(" ");

// console.log(capitalizedStr);


// function fun() {
// return({1:0})
// }
// console.log(typeof fun);



// Question ..................................................................................


// Write a JavaScript function to determine if a given string contains only unique characters.

// Example Input/Output:

// Input: "abcdef"
// Output: true

// Input: "abcabc"
// Output: false

// Solving 

// let uniqueChar = (word) =>{

//     let obj = {
//     }

// word.split("").forEach((data) =>{
//     if(obj[data]){
//         obj[data] += 1
//     }else{
//         obj[data] = 1
//     }   
// })

//  for(let key in obj){
//    return obj[key] == 1 ? true : false
    
// }

// }
// console.log(uniqueChar("abcabc"))

// question 2

// Write a JavaScript function called findMax that takes an array of numbers and returns the maximum value found in that array.

// Example:

// javascript
// Copy code

// let maxValue = [1, 3, 2, 5, 4]
// let num = 0
// maxValue.map(data => data > num  ?   num = data : num = num)
// console.log(num);


// Expected output: 5


// question 3

// Reversing Words in a Sentence

// Write a JavaScript function called reverseWords that takes a sentence as a string and returns the sentence with each word reversed, but the word order should remain the same.

// Example:

// javascript
// Copy code
// reverseWords("Hello World")

// let reverseWords = (str)=>{

// let reverse = str.split("").reverse().join("").split(" ").reverse().join(" ")
// console.log(reverse);

// }
// reverseWords("Hello World")
// // Expected output: "olleH dlroW"






// question 4

// Write a JavaScript function called filterEvens that takes an array of numbers and returns a new array containing only the even numbers.

// Example:

// javascript
// Copy code
// filterEvens([1, 2, 3, 4, 5, 6])
// // Expected output: [2, 4, 6]

// answer

// let evenNumber = (num) =>{
//     let ans =  num.filter (data => data%2 == 0 ? data : null ) 
//     console.log(ans);
//  }
// evenNumber([1, 2, 3, 4, 5, 6])


// question 5

// Counting Words in a Sentence

// Write a JavaScript function called countWords that takes a string sentence as input and returns the count of words in the sentence.

// Example:

// javascript
// Copy code
// countWords("Hello World this is JavaScript")
// Expected output: 5

// let words = "Hello World this is JavaScript";

// let ans = words.split(" ").length
// console.log(ans);


// question 6

// Write a JavaScript function called findLongestWord that takes a sentence as input and returns the longest word in the sentence. 
// If there are multiple words of the same maximum length, return the first one.

// Example:

// javascript
// Copy code
// findLongestWord("JavaScript is amazing")
// Expected output: "JavaScript"

// answer

// let word = "JavaScript is amazing";
// let lengthCount = 0
// let resultWord = ""
// let ans = word.split(" ").forEach(item => {
//     if(lengthCount < item.length){
//     lengthCount = item.length
//     resultWord = item
//         }

// })

// console.log(resultWord);


// question 7

// Array of Squares

// Write a JavaScript function called squareElements that takes an array of numbers and returns a new array with each element squared.

// Example:

// javascript
// Copy code
// squareElements([1, 2, 3, 4])
// Expected output: [1, 4, 9, 16]

// answer

// let arr = [1, 2, 3, 4]
// let ans = arr.map(data => data*data)
// console.log(ans);

// question 8

// Checking for Palindromes

// Write a JavaScript function called isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forward and backward), and false otherwise. Ignore case and spaces.

// Example:

// javascript
// Copy code
// isPalindrome("racecar")
// // Expected output: true

// isPalindrome("hello")
// // Expected output: false

// let palandrome = (str) =>{
//     return str.split("").reverse().join("") == str
// }
// console.log(palandrome("madam"))

// question 9                                    IMPORTANT.......................................

// Counting Occurrences in an Array

// Write a JavaScript function called countOccurrences that takes an array and returns an object showing the count of each unique element in the array.

// Example:

// javascript
// Copy code
// countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// Expected output: { apple: 3, banana: 2, orange: 1 }

// answer

// let checkRepeatedWord = (words) =>{

// let obj = {

// }

// words.forEach((data) => {
//     if(obj[data]){
//         obj[data]+=1
//     }else{
//         obj[data] = 1
//     }
// })
// console.log(obj);
// }

// checkRepeatedWord(["apple", "banana", "apple", "orange", "banana", "apple", "red"])


// Question 10

// Write a JavaScript function called removeFalsyValues that takes an array and returns a new array with all falsy values removed. Falsy values in JavaScript include false, 0, "" (empty string), null, undefined, and NaN.

// Example:

// javascript
// Copy code
// removeFalsyValues([0, "Hello", false, 42, "", undefined, null, "JavaScript"])
// Expected output: ["Hello", 42, "JavaScript"]

// Answer

// let dleteFalseValue = (value) =>{

//    let ans = value.filter(data =>  data  )
//     console.log(ans);


// }
// dleteFalseValue([1, null, 2, undefined, 3, "", 4, false, NaN])


// question 11

// Capitalize Words in a Sentence

// Write a JavaScript function called capitalizeWords that takes a string sentence as input and returns the sentence with the first letter of each word capitalized.

// Example:

// javascript
// Copy code
// capitalizeWords("hello world from javascript")
// Expected output: "Hello World From JavaScript"

// answer

// let camelCaseWord = (word) =>{

// let ans = word.split(" ").map(data => data.slice(0,1).toUpperCase() + data.slice(1))
// console.log(ans);

// }
// camelCaseWord("hello world from javascript")


// question 12

// Finding Common Elements in Two Arrays

// Write a JavaScript function called findCommonElements that takes two arrays as input and returns an array containing the elements that are present in both arrays, with no duplicates.

// Example:

// javascript
// Copy code
// findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])
// Expected output: [3, 4]

// answer

// let checkCommonElement = (arr1 , arr2) =>{

// let ans = arr1.filter(data => arr2.includes(data))
// console.log(ans);

// }
// checkCommonElement([1, 2, 3, 4], [3, 4, 5, 6])

// question 13

// Write a JavaScript function called findMostFrequent that takes an array as input and returns the element that appears most frequently in the array. If there is a tie, return any of the most frequent elements.

// Example:

// javascript
// Copy code
// findMostFrequent([1, 2, 2, 3, 3, 3, 2, 2, 4, 4])
// Expected output: 2

// answer


// pending .......

// question 14

// Write a JavaScript function called sumOfDigits that takes a positive integer as input and returns the sum of its digits.

// Example:

// javascript
// Copy code
// sumOfDigits(1234)
// Expected output: 10 (1 + 2 + 3 + 4 = 10)

// answer

// let num = 1234;

// let ans = num.toString().split("").reduce((pre , value) => Number(pre) + Number(value))
// console.log(ans);


// question 15

// Write a JavaScript function called removeElement that takes an array and a value as inputs and returns a new array with all instances of the specified value removed.

// Example:

// javascript
// Copy code
// removeElement([1, 2, 3, 4, 3, 5], 3)
// Expected output: [1, 2, 4, 5]

// answer

// let removeElement = (number , remove) =>{

// let ans = number.filter(data => data !== remove)
// console.log(ans);


// }

// removeElement([1, 2, 3, 4, 3, 5], 3)


// question 16

// Find the Difference Between Two Arrays

// Write a JavaScript function called findDifference that takes two arrays and returns an array with elements that are present in one array but not in the other.

// Example:

// javascript
// Copy code
// findDifference([1, 2, 3, 4], [3, 4, 5, 6])
// Expected output: [1, 2, 5, 6]

// answer

// let checkCommonElement = (arr1 , arr2) =>{

// let ans = arr1.filter(data => !arr2.includes(data))
// let ans2 = arr2.filter(data => !arr1.includes(data))

// return [...ans , ...ans2]
// }
// console.log( checkCommonElement([1, 2, 3, 4], [3, 4, 5, 6]) )

// question 17

// Find the Missing Number in a Sequence

// Write a JavaScript function called findMissingNumber that takes an array of consecutive numbers (with one number missing) as input and returns the missing number.

// Example:

// javascript
// Copy code
// findMissingNumber([1, 2, 3, 5])
// // Expected output: 4

// findMissingNumber([10, 11, 12, 14])
// Expected output: 13

// answer

// let missingNumberFind = (number) =>{
// let number1 = number[0]
// let ans = []
// number.forEach(data => {
//    if( data == number1){
//        number1 = number1+1

//     } else{
//     ans.push(number1)
//     number1 = number1+1

//    }

// })
// console.log(ans);
// }
// missingNumberFind([10, 11, 12, 14  ])

// question 18

// Write a JavaScript function called findFirstNonRepeatingChar that takes a string as input and returns the first non-repeating character. If all characters repeat, return null.

// Example:

// javascript
// Copy code
// findFirstNonRepeatingChar("javascript")
// Expected output: "j"

// findFirstNonRepeatingChar("aabbcc")
// Expected output: null

// findFirstNonRepeatingChar("racecar")
// Expected output: "e"

// answer

// let findFirstNonRepeatingChar = (str) =>{

// let obj = {

// }
//     str.split("").forEach(nesData => {
//         if(obj[nesData]){
//           obj[nesData] = 0
//         } else{
//             obj[nesData] = 1
//         }       
//     })

// for(let x in obj){
//     if(obj[x] === 1){
// console.log(x);

//     }

// }

// }
// findFirstNonRepeatingChar("racecar")

// let a = [1,2,3,4]
// console.log( a.map(data => {
// return(    
//     data== 2 ? data = 4 : data
// )
// }) )
// console.log(a);


// question 19

// Write a JavaScript function called rotateArray that takes an array and a number n as inputs and returns the array rotated to the right by n steps. If n is greater than the length of the array, the rotation should wrap around.

// Example:

// javascript
// Copy code
// rotateArray([1, 2, 3, 4, 5], 2);
// // Expected output: [4, 5, 1, 2, 3]

// rotateArray([10, 20, 30, 40, 50], 3);
// Expected output: [30, 40, 50, 10, 20]

// answer

// let rotateArray = (arr1 , rotateNum) =>{


//     let cutValue = arr1.splice(-rotateNum , rotateNum )
//     let ans = [...cutValue , ...arr1 ]
//     console.log(ans);

// }
// rotateArray([10, 20, 30, 40, 50], 3);

// question 20

// Write a function isRotation that takes two strings as input and returns true if one string is a rotation of the other, and false otherwise.

// Example:
// javascript
// Copy code
// console.log(isRotation("hello", "lohel")); // Expected output: true
// console.log(isRotation("hello", "olelh")); // Expected output: false
// console.log(isRotation("abcde", "cdeab")); // Expected output: true

// answer

// let isRotation = (sortWord , unSortWord) =>{


// let firstWord = sortWord.slice(0,1)
// let indexNum = unSortWord.split("").findIndex(data => data == firstWord)
// let lastWord = unSortWord.split("").slice(indexNum )
// let startWord = unSortWord.split("").slice(0 , indexNum)
// // console.log(check);
// return([...lastWord , ...startWord].join("") == sortWord);


// }
// console.log(isRotation("abcde", "cdeab"))


// question 21

// Write a function findIntersection that takes an array of arrays as input and returns an array containing the common elements present in all the input arrays.

// Example:
// javascript
// Copy code
// console.log(findIntersection([[1, 2, 3], [4, 2, 1, 5], [1, 6, 2]])); 
// // Expected output: [1, 2]

// console.log(findIntersection([[7, 8, 9], [9, 8], [8, 9, 10, 7]])); 
// Expected output: [8, 9]

// answer

// let findIntersection = (arr) => {

//     let [arr1, arr2, arr3] = arr
//     let num = []
//     let finalAns = [];
//     arr1.forEach((data) => {
//         arr2.forEach((nesData) => {
//             if (data == nesData) {
//                 num.push(data);
//             }
//         })
//     })
//     arr3.forEach(data => {
//         num.forEach(nesData => {
//             if (data == nesData) {
//                 finalAns.push(data)
//             }
//         })
//     })
//     console.log(finalAns);
// }
// findIntersection([[1, 2, 3], [4, 2, 1, 5], [1, 6, 2]])

// question 22

// Write a function called getWordFrequencies that takes a string as input and returns an object showing the frequency of each word in the string. The function should ignore case and punctuation.

// Example:
// javascript
// Copy code
// console.log(getWordFrequencies("Hello world! Hello universe."));
// Expected Output:
// javascript
// Copy code
// { hello: 2, world: 1, universe: 1 }

// answer

// let getWordFrequencies = (word) =>{
//     let obj = {};
//      word.split(" ").forEach(data => {
// if(obj[data]){
//     obj[data] +=1
// }else{
//     obj[data] = 1
// }
//     })
//     console.log(obj);
    
// }
// getWordFrequencies("Hello world! Hello universe.")

// question 23

// Question: Write a function that takes an array of integers and returns an array with all duplicates removed, preserving the original order.

// Example:

// javascript
// Copy code
// console.log(removeDuplicates([1, 2,3,2,4,1,5])
// Expected output: [1, 2, 3, 4, 5]

// answer

// let removeDuplicates = (arr) =>{

//    return [...new Set(arr)]

// }
// console.log( removeDuplicates([1, 2,3,2,4,1,5]) )

// question 24

// Next Question: Write a function that takes a string and returns the most frequently occurring character.

// Example:

// javascript
// Copy code
// console.log(findMostFrequentChar("javascript"));
// Expected output: "a"

// answer

// let findMostFrequentChar =(word)=>{

// let obj ={}

// word.split("").forEach((data)=>{
//     if(obj[data]){
//         obj[data] += 1
//     }else{
//         obj[data] = 1
//     }
// })
//  for (const key in obj) {   
//  if( obj[key] > 1 ) { 
//         return(key)
//    }
// }

// }
// console.log( findMostFrequentChar("javascript"))



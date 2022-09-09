/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
/////////////////////////////////////////////////////////////////////////////////////

// Question#1
function max(num1,num2){
    if(num1 >= num2){
        return num1;
    }else{
        return num2;
    }
}
console.log("Expected output of max(5,19) is 19  " + myFunctionTest(19, max(5, 19)));
console.assert(max(5,19) === 5, "False Assertion");
console.assert(max(5,19) === 19, "False Assertion");
/////////////////////////////////////////////////////////////////////////////////////

// Question#2
function maxOfThree(num1,num2, num3){
    return max(max(num1,num2),num3);
}
console.log("Expected output of maxOfThree(5,19,21) is 21.  " + myFunctionTest(5, maxOfThree(5,19,21)));
console.log("Expected output of maxOfThree(5,19,21) is 21.  " + myFunctionTest(21, maxOfThree(5,19,21)));

console.assert(maxOfThree(5,19,21) === 5, "5 is not the maxOfThree(5,19,21) ");
console.assert(maxOfThree(5,19,21) === 21, "False Assertion");

/////////////////////////////////////////////////////////////////////////////////////

//Question#3
function isVowel(x){
    let myChar = x.toLowerCase();

    if(myChar == 'a' || myChar == 'e'|| myChar == 'i'|| myChar == 'o'|| myChar == 'u'){
        return true;
    }
    else{
        return false;
    }
}

console.log("Expected output of isVowel('R') is false.  " + myFunctionTest(false, isVowel('R')));
console.log("Expected output of isVowel('a') is true.  " + myFunctionTest(true, isVowel('a')));

console.assert(isVowel('R') === true, "R is not a vowel");
// console.assert(isVowel('a') === false, "a is a vowel");
console.assert(isVowel('a') === true, "False Assertion");

/////////////////////////////////////////////////////////////////////////////////////

//Question#4

//sum
function sum(myArray){
    let result = 0;
    for(let i=0; i < myArray.length; i++){
        result += myArray[i];
    }
    return result;

}

console.log("Expected output of sum([1,2,3,4]) is 10. " + myFunctionTest(10, sum([1,2,3,4])));
console.assert(sum([1,2,3,4]) !== 10, "sum([1,2,3,4]) === 10");

//multiply
function multiply(myArray){
    let result = 1;
    for(let i=0; i < myArray.length;i++){
        result *= myArray[i];
    }
    return result;
}

console.log("Expected output of multiply([1,2,3,4]) is 24. " + myFunctionTest(24, multiply([1,2,3,4])));
console.log("Expected output of multiply([1,2,3,4]) is 24. " + myFunctionTest(25, multiply([1,2,3,4])));

console.assert(multiply([1,2,3,4]) !== 24, "multiply([1,2,3,4]) === 24");
console.assert(multiply([1,2,3,4]) === 24, "multiply([1,2,3,4]) === 24");
/////////////////////////////////////////////////////////////////////////////////////

// Question#5
function reverse(inputStr){
    let reversedStr = "";
    for(let i = inputStr.length-1;i > -1; i--){
        reversedStr += inputStr[i];
    }
    return reversedStr;

}
console.log("Expected output of reverse('ABCDEF') === 'FEDCBA'. " + myFunctionTest('FEDCBA', reverse('ABCDEF')));
console.assert(reverse("ABCDEF") === "ABCDEF" , "reverse('ABCDEF') is FEDCBA");
/////////////////////////////////////////////////////////////////////////////////////

// Question#6
function findLongestWord(words){
    let longestWordLen = words[0].length;
 
    for(let i=1;i < words.length; i++){
        if(words[i].length > longestWordLen){
            longestWordLen = words[i].length;
        }
    }
    return longestWordLen;

}
console.log(findLongestWord(["Apple","Banana","Orange","Watermelon","Cabbage"]));
console.assert(findLongestWord(["Apple","Banana","Orange","Watermelon","Cabbage"]) !== 10 , "The longest word has a length of 10");
console.assert(findLongestWord(["Apple","Banana","Orange","Watermelon","Cabbage"]) === 10 , "The longest word has a length of 10");
/////////////////////////////////////////////////////////////////////////////////////

//Question#7
function filterLongWords(inputArr, i){
    let outputArr = [];
    let counter = 0;

    for(let j=0; j < inputArr.length; j++){
        if(inputArr[j].length > i){
            outputArr[counter] = inputArr[j];
            counter++;
        }
    }
    return outputArr;

}

console.log(filterLongWords(["Apple","Banana","Orange","Watermelon","Cabbage"],6));
console.assert(filterLongWords(["Apple","Banana","Orange","Watermelon","Cabbage"],6) !== ['Watermelon', 'Cabbage'] , "['Watermelon', 'Cabbage'] has length greater than 6");

/////////////////////////////////////////////////////////////////////////////////////

// Question#8
 
const a = [1,3,5,3,3];

const b = a.map(function(elem, array) {
  return elem * 10;
})
console.log("Result of a.map is :" + b);

const c = a.filter(function(elem, array){
    return elem === 3;});
    console.log("Result of a.filter is :" + c);

const newValue = a.reduce((a,b)=>a*b);
console.log("Result of a.reduce is :" + newValue);
/////////////////////////////////////////////////////////////////////////////////////






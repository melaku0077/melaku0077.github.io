// Melaku G.Denbel 
// Maharashi International University 
// WAP Assignment on Functional Programming


function sum(inputArr){
    return inputArr.reduce((accumValue, currentIndex) => accumValue + currentIndex);
}

function multiply(inputArr) {
    return inputArr.reduce((accumValue, currentIndex) => accumValue * currentIndex);
  }
  
  /* string reversal */
  function reverse(str) {
    return str
      .split("")
      .reduceRight((accumValue, currentValue) => accumValue + currentValue);
  }
  
  /* filter words */
  function filterLongWords(words, i) {
    return words.filter((word) => word.length > i);
  }
  
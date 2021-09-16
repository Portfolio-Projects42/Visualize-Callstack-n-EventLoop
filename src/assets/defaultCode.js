export default `
function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

// NOTE:
//   This is an interactive vizualization. So try 
//   editing this code and see what happens. You
//   can also try playing with some of the examples 
//   from the dropdown!
function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  const wordsList = text.split(' ')
  // For each word...
  for (word in wordsList) {
    // If that max repeat count is higher than the overall max repeat count, then
    // update maxRepeatCountOverall
    // update wordWithMaxRepeatCount
    let repeatCountForWord = findMaxRepeatCountInWord(wordsList[word])
    if (maxRepeatCountOverall < repeatCountForWord) {
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = wordsList[word]
    }
  }

  return wordWithMaxRepeatCount;
}

`.trim();

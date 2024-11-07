//problem-03
//word occurances count using built in function [match,map,toLowerCase]

function CountWordOccurences(sentence: string, word: string): number {
  let cnt = 0;

  // const words=sentence.match(/\b\w+\b/g) || [];
  // const words1=words.map(word=>word.toLowerCase());
  // const word1=word.toLowerCase();

  const words=sentence.split(" ");
  for(let value of words)
  {
    if(value===word){
        cnt++;
    }
  }
  return cnt;
}

// console.log(CountWordOccurences("I love typescript", "typescript"));

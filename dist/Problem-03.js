"use strict";
//problem-03
//word occurances count using built in function [match,map,toLowerCase]
function CountWordOccurences(sentence, word) {
    let cnt = 0;
    const words = sentence.match(/\b\w+\b/g) || [];
    const words1 = words.map(word => word.toLowerCase());
    const word1 = word.toLowerCase();
    for (let value of words1) {
        if (value == word1) {
            cnt++;
        }
    }
    return cnt;
}
// console.log(CountWordOccurences("TypeScript is great. I love TypeScript!", "typescript"));

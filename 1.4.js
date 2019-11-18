
const problem = `1.4
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: Tru e (permutations : "taco cat" , "atco eta" , etc. )
Hints: #106, #134, #136 
`;

const testCases = [
    "Tact Coa", //
    "aaa", 
    "caaca", // acaca -> {a: 3, c: 2}
    "jesus", // {j: 1, e: 1, u: 1, s: 2}
    "tattta", // atttta -> {a: 2, t: 4}
    "mota",
    "aperare", // arepera
    "a",
    "ac",
    "jessele",
    "word"

];

// O(N) is the Best complexity we could have, by using a Map
// The algorithm is little bit tricky you need to build a map
// with the letter and the count of appearances on the word
// then we need to have 2 rules to know if a word if palindrome
// 1 if every letter of the word, is repeated an even number of time, it could form a Palindrome
// 2 if there almost all letters count even, and only 1 odd, it could form a palindrome, e.x -> baa -> aba 
// So we only need to count the odd counts for letters 
const isPalindromePermutation = str => {
    const countMap = toLettersCountMap(str.toLowerCase()); //O(N)
    let oddCount = 0;
    for (const letter in countMap) {
        if(countMap[letter] % 2 !== 0){
            oddCount++;
        }
    }
    return oddCount <= 1;
}

const toLettersCountMap = str => {
    const map = {};
    const space = ' ';
    for (let i = 0; i < str.length; i++) {
        const letter = str.charAt(i);
        
        if(letter === space){
            continue;
        }

        if(map[letter]){
            map[letter] += 1;
        }else {
            map[letter] = 1;
        }
    }
    return map;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: \"" + testCase +"\" Result: \""+ isPalindromePermutation(testCase)+"\"");
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
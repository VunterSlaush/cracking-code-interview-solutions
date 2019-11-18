
const problem = `1.5

One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale , ple - > tru e
pales , pale - > tru e
pale , bale - > tru e
pale , bake - > fals e
Hints: #23, #97, it 130
`;

const testCases = [
    ["pale", "ple"],
    ["pales", "pale"],
    ["pale", "bale"],
    ["pale", "bake"],
    ["momo", "mota"],
    ["", "a"],
    ["sameword", "sameword"],
    ["lorem ipsum", "larem ipsum"]
];


// O(N) best time complexity for worst case, where N is the Lenght of longest word
// the algorithm is simple, we can init discarding the strings that are
// longest than others by more than 1 letter
// then we can iterate over the longest and with a boolean that mark is theres a change
// we could know if there are more than one change or not
const theyCanBeEqual = (strA, strB) => {
    const longest = strA.length > strB.length ? strA : strB;
    const shortest = strA.length > strB.length ? strB: strA;
    if(longest.length - shortest.length > 1){
        return false;
    }
    let changed = false;
    let longestIndex = 0;
    let shortestIndex = 0;
    while (longestIndex < longest.length) {
        const char1 = longest.charAt(longestIndex);
        const char2 = shortest.length == shortestIndex ? null : shortest.charAt(shortestIndex);
        if(char1 !== char2){
            if(changed){
                return false;
            }
           // change Cases 
           if(shortest.length === longest.length){
               // replacement
               changed = true;
           } else {
               // Insert or Delete, could be treated the same
               longestIndex++;
               changed = true;
               continue;
           }
        }
        shortestIndex++;
        longestIndex++;
    }
    return true;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ", testCase, " Result:", theyCanBeEqual(testCase[0], testCase[1]));
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
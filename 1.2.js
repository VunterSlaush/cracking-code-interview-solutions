
const problem = `1.2 
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.

Permutation:  is the act of arranging the members of a set into a sequence or order, or, if the set is already ordered, rearranging (reordering) its elements—a process called permuting.
`;

const testCases = [
    ["abcd", "ba"],
    ["cd", "abcd"],
    ["abc", "cba"],
    ["abc", "cbaaa"],
    ["mota", "jesus"],
    ["", "abc"],
    ["qwertyuiop", "poiuytrewq"],
];


// In O(N) with a Map is the Best complexity i think
// The algorithm is simple, just fill a map with the longest of the two strings
// then just iterate over the other finding is theres not a letter in the map to return false
// in the other case the string A y permutation of String B or viceversa
const isPermutation = (strA, strB) => {
    const longest = strA.length > strB.length ? strA : strB;
    const shortest = strA.length > strB.length ? strB: strA;
    const map = stringToMap(longest); // O(N)
    for (let i = 0; i < shortest.length; i++) { // O(N)
        const char = shortest.charAt(i);
        if(!map[char]){
            return false;
        }
    }
    return true;
}

const stringToMap = str => {
    const map = {};
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        map[char] = true;
    }
    return map;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ", testCase, " Result:", isPermutation(testCase[0], testCase[1]));
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;

const problem = `1.9
String Rotation; Assume you have a method isSubs t rin g which checks if one word is a substring
of another. Given two strings, si and s2, write code to check if s2 is a rotation of si using only one
call to isSubs t rin g [e.g., "waterbottle " is a rotation of erbottlewat"),
Hints: #34, #88, #104 
`;

//erbottlewaterbottlewat

const testCases = [
    ["waterbottle", "erbottlewat"],
    ["mota", "tamo"],
    ["abcde", "cdeab"],
    ["hello", "goodbye"]
];

// O(N) is the complexity of this problem. because 
// the isSubstring method took O(N) 
// and the concatenations too
const isRotation = (strA, strB) => {
    const concatenation = strB+strB;
    return isSubString(concatenation, strA);
}

const isSubString = (strA, strB) => {
    return strA.indexOf(strB) !== -1;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ", testCase, " Result:", isRotation(testCase[0], testCase[1]));
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
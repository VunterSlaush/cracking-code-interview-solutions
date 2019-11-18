
const problem = `1.6
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints: #92, #110 
`;

const testCases = [
    "aabcccccaaa",
    "abcde",
    "laaaaaalaaaaaalaaaaaaalaaaaaaaaaacaaaaaaa",
    "a",
    "",
    "             aaaaaaac"
];

// O(N) where N is the length of given input String is the best complexity
// the algorithm could be done with 3 variables, 1 for current letter
// the other to have the count of repetitios and the last one 
// to append the compression result
const compress = str => {
    let currentLetter = str.charAt(0);
    let count = 1;
    let compressed = "";
    for (let i = 1; i < str.length; i++) {
        const char = str.charAt(i)
        if(currentLetter === char){
            count++;
        }else{
            compressed += currentLetter + count;
            currentLetter = char;
            count = 1;
        }
    }
    compressed += currentLetter + count;
    return compressed.length < str.length ? compressed : str;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: \"" + testCase +"\" Result: \""+ compress(testCase)+"\"");
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
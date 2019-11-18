
const problem = `1.3
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith  ",
Output: "Mr%20John%20Smith" `;

const testCases = [
    "Mr John Smith  ",
    "   Mr Jesus Mota  ",
    " H I E V E R Y O N E   "
];

// O(N) where N is the length of given input String is the best complexity
// the algorithm is just take the input and generate a new String
// taking into account that if a space have another space in front, we omit it
const urlLify = str => {
    const space = ' ';
    let urlLifed = "";
    for (let i = 0; i < str.length; i++) {
        const previousChar = i === 0 ? space : str.charAt(i - 1);
        const char = str.charAt(i);
        const nextChar = i == str.length - 1 ? space : str.charAt(i + 1);
        if(char === space && previousChar != space && nextChar != space){
            urlLifed += '%20';
        }else if(char != space) {
            urlLifed += char;
        }        
    }
    return urlLifed;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: \"" + testCase +"\" Result: \""+ urlLify(testCase)+"\"");
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
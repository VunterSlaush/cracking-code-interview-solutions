
const problem = `1.1
    Is Unique
    Implement an algorithm to determine if a strings has all unique characters.
    What if you cannot use an additional data structure?
    `;

const testCases = [
    "abc", 
    "aba", 
    "qwertyuiopasdfghjklzxcvbnm", 
    "1234567890", 
    "62211226",
    "SUBDERMATOGLYPHIC",
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "Ciclopentanoperhidrofenantreno",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

// With a Map (I Think the Best Complexity)
const allUniqueCharacters = str => {
    const map = {};
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (map[char]) {
            return false;
        }
        map[char] = true;
    }
    return true;
}

// Without a Data Structure O(N log N) the best case
// doing the following algorithm
// 1 Convert the String to charCode array
// 2 Sort the CharCode Array
// 3 Find 
//   3.1 Remove the element to find from the array
//   3.2 Do a binary Search 
const allUniqueCharactersWithoutDataStructure = str => {
    const charCodes = toCharCodes(str); // O(N)
    const sortedArray = charCodes.sort(); // O(N LogN)
    for (let i = 0; i < sortedArray.length; i++) { //O(N) 
        const charCode = sortedArray[i];
        const arrayWithoutTarget = [...sortedArray];
        arrayWithoutTarget.splice(i, 1);
        const found = binarySearch(charCode, arrayWithoutTarget) // O(Log N)
        if(found) {
            return false;
        }
    }
    return true;
} 

const binarySearch = (number, numbers) => {
    let left = 0;
    let right = numbers.length - 1;
    while(left <= right){ 
        let middle = Math.floor((right + left) / 2);

        if(numbers[middle] === number){
            return true;
        } 
        
        if(numbers[middle] < number){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
}

const toCharCodes = str => {
    const charCodes = [];
    for (let i = 0; i < str.length; i++) {
        charCodes.push(str.charCodeAt(i));
    }
    return charCodes;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ", testCase, " Result:", allUniqueCharacters(testCase));
    }
    console.log("Testing with a Data Structure took: ", Date.now() - init, " ms");

    console.log();

    init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ", testCase, " Result:", allUniqueCharactersWithoutDataStructure(testCase));
    }
    console.log("Testing withot a Data Structure took: ", Date.now() - init, " ms");
    
}

module.exports = test;
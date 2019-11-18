
const problem = `1.7
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
Hints: #51, #100 
`;

const testCases = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ],
];

// O(N) where N is the quantity of elements in the matrix
// you also could see the Big O notation as O(N^2) but is matrix
// we could rotate the matrix 90 degrees by iterates from bottom of every column
// and put every value in this order in another matrix
const rotateNinetyDegrees = matrix => {
    const size = matrix.length - 1; // the matrix is NxN
    const rotatedMatrix = [];
    for (let j = 0; j <= size; j++) { // Running Over Columns
        const row = [];
        for (let i = size; i >= 0; i--) { // from bottom to top over the row of columns
            row.push(matrix[i][j]);
        }
        rotatedMatrix.push(row);
    }
    return rotatedMatrix;
}

const printMatrix = matrix => {
    let str = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            str += " " + matrix[i][j];
        }
        console.log(str);
        str = "";
    }
    return str;
}

const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ")
        printMatrix(testCase);
        console.log("Result:");
        printMatrix(rotateNinetyDegrees(testCase));
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
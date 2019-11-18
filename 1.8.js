
const problem = `1.8
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
Hints: #17, #74, #102
`;

const testCases = [
    [
        [1, 2],
        [0, 4]
    ],
    [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]
    ],
    [
        [1, 0, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ],
];

// O(NxM) is the best complexity
// we need to know what columns and rows are we going to set 0 this could be done in O(N)
// then we set it its another O(N)
const setZero = matrix => {
    const columnsToSet = {};
    const rowsToSet = {};
    // Find rows and columns
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                columnsToSet[j] = true;
                rowsToSet[i] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (columnsToSet[j] || rowsToSet[i]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
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
        printMatrix(setZero(testCase));
    }
    console.log("Testing took: ", Date.now() - init, " ms");
}

module.exports = test;
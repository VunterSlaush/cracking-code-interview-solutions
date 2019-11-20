const { toLinkedList, toArray } = require("./utils/node");
const problem = `2.2
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
Hints: #8, #25, #41, #67, #126 
`;

const testCases = [
    [toLinkedList([1, 2, 3, 4, 6, 7, 8, 9]), 4],
    [toLinkedList([2, 2, 3, 3, 4, 4, 5, 4]), 0],
    [toLinkedList([1, 2, 3, 4, 5]), 3],
    [toLinkedList([1]), 0],
    [toLinkedList([]), 5]
];

// The worst O(N) algorithm to do this, but is the best complexity 
// that we could have 
const kthLastElement = (list, kth) => {
    const listSize = getListSize(list); // O(N)
    const target = listSize - 1  - kth;
    if(target < 0) return null;
    return target >= 0 ? get(list, target) : null; // O(N)
}

//The Best O(N) Algorithm
// with two pointers we could iterate with first one throught the list
// till the steps were greatest than the value of "kth"
// then we could move the second pointer one by one, at the end
// the second pointer is going to be the kth element of the list backwards.
const kthLastElement2 = (list, kth) => {
    let pointer1 = list;
    let pointer2 = list;
    let length = 0;
    while(pointer1 !== null){
        if(length > kth){
            pointer2 = pointer2.next;
        }
        pointer1 = pointer1.next;
        length++;
    }
    return pointer2;
}

const get = (list, n) => {
    return n === 0 ? list : get(list.next, --n);
}

const getListSize = (list) => {
    return list !== null ? 1 + getListSize(list.next) : 0;
}


const test = () => {
    console.log(problem);
    let init = Date.now()
    for (const testCase of testCases) {
        const element = kthLastElement(testCase[0], testCase[1]);
        console.log("Test Case: ", toArray(testCase[0]), " Result:", element ? element.data : null);
    }
    console.log("Testing finding first the size of the list ", Date.now() - init, " ms");

    init = Date.now()
    for (const testCase of testCases) {
        const element = kthLastElement2(testCase[0], testCase[1]);
        console.log("Test Case: ", toArray(testCase[0]), " Result:", element ? element.data : null);
    }
    console.log("Testing without finding first the size of the list ", Date.now() - init, " ms");


}

module.exports = test;
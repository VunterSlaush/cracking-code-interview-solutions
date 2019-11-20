const { toLinkedList, toArray } = require("./utils/node");
const problem = `2.1
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
Hints: #9, #40
`;

const testCases = [
    toLinkedList([1, 2, 3, 4, 6, 7, 8, 9]),
    toLinkedList([2, 2, 3, 3, 4, 4, 5, 5]),
    toLinkedList([1, 1, 1, 1, 1]),
    toLinkedList([1]),
    toLinkedList([]),
];

const testCases2 = [
    toLinkedList([1, 2, 3, 4, 6, 7, 8, 9]),
    toLinkedList([2, 2, 3, 3, 4, 4, 5, 5]),
    toLinkedList([1, 1, 1, 1, 1]),
    toLinkedList([1]),
    toLinkedList([]),
];

// The algorithm for remove duplicates in every array, list etc etc
// its using a map, with a map you could got a O(N) complexity
// you just need to store the elements in the map if you found a duplicate
// just remove it
const removeDup = (list, map = {}) => {

    if (list === null) {
        return null;
    }

    if (map[list.data]) {
        list.next = removeDup(list.next, map);
        return list.next;
    }

    map[list.data] = true;
    list.next = removeDup(list.next, map);
    return list;
}

// To remove duplicates without using a data structure
// the algorithm is going one by one into every element
// and then run the rest of the list removing every other element
// that has the same value, this algorithm is like runing a filter
// for every element, filtering all the next elements with the the same
// value. it tooks like O(N logN) because in every step, we're reducing
// the next filter by One element at least.
const removeDupLow = list => {
    let pointer = list;
    while (pointer !== null) {
        pointer.next = remove(pointer.next, pointer.data);
        pointer = pointer.next;
    }
    return list;
}

const remove = (list, target) => {
    if (list === null) {
        return null;
    }
    if (list.data === target) {
        list.next = remove(list.next, target);
        return list.next;
    } else {
        list.next = remove(list.next, target);
        return list;
    }
}

const test = () => {
    let init = Date.now()
    for (const testCase of testCases) {
        console.log("Test Case: ", toArray(testCase), " Result:", toArray(removeDup(testCase)));
    }
    console.log("Testing with a Data Structure took: ", Date.now() - init, " ms");

    console.log();

    init = Date.now()
    for (const testCase of testCases2) {
        console.log("Test Case: ", toArray(testCase), " Result:", toArray(removeDupLow(testCase)));
    }
    console.log("Testing without a Data Structure took: ", Date.now() - init, " ms");

}

module.exports = test;

const createNode = data => ({
    next: null,
    data
});

const createDoublyNode = data => ({
    next: null,
    prev: null,
    data
});

const toLinkedList = (array, index = 0) => {
    if(index === array.length)
        return null;
    const node = createNode(array[index]);
    node.next = toLinkedList(array, ++index);
    return node;
}

const toArray = list => {
    const array = [];
    let pointer = list;
    while(pointer !== null){
        array.push(pointer.data);
        pointer = pointer.next;
    }
    return array;
}

module.exports = {
    createNode,
    createDoublyNode,
    toLinkedList,
    toArray
}
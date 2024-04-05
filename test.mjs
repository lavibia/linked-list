import { LinkedList } from './LinkedList.mjs';

let list = new LinkedList();
list.append('test'); //1
list.prepend('textFirst'); //0
list.append('third'); //2

console.log(`Initial list: ${list.toString()} `)
console.log(`The list size: ${list.size}`);
console.log(`The list tail: ${list.tail}`);
console.log(`The list head: ${list.head}`);
console.log(`Second list Node: ${list.at(1)}`);
list.pop();
console.log(`List after the last node is removed: ${list}`); 
console.log(`Does the list contains the value 'something'? : ${list.contains('something')}`);
console.log(`Index of 'test'. False if not found: ${list.find('test')}`);
console.log(`The final list is: ${list.toString()}`);
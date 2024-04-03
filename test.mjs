import{LinkedList} from './LinkedList.mjs';

let list= new LinkedList();
list.append('test');
list.prepend('textFirst');

console.log(list, list.size, list.head, list.tail, list.at(200));
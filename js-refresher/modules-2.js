//importing from an iife induced namespace
// Module1.addToList(2);
// Module1.addToList(3);
// console.log(Module1.list);
//

//using named imports
// import {list, addToList} from "./modules-1.js";

// addToList(2);
// addToList(0);
// addToList(1);
// console.log(list);

//using default imports
// import addToList from "./modules-1.js";
// addToList(2);
// addToList(2);

//mixing default imports with named imports
// import {default as addToList, list} from "./modules-1.js";
import addToList, {list} from "./modules-1.js";

addToList(23);
console.log(list);

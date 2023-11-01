"use strict";
let str: string = "0";
let num: number = 5;
let general: any = 15;

//type assertion
num = <number>(<any>str);
let _new;

_new = <string>general;
console.log(num);
console.log(_new);
const list:number[] = [];
const strList:string[] = [];

const addToList = (item1: number, item2?: number): void => {
  list.push(item1);
  if (item2) list.push(item2);
};

// const addToStrList = (item1: string, item2?: string): void => {
//   if (!strList.includes(item1)) strList.push(item1);
//   if (item2 && item2.match("\w+@\w+.\w+") && !strList.includes(item2))
//     strList.push(item2);
// };

addToList(2, 23);
console.log(list);
// addToStrList("home :", "victoria");
// addToStrList("home :", "vic@toria.com");

console.log(strList);

//tuples

const someObj: {
	role: [number, string];
} = {
	role: [1, "admin"]
}

//caught by tsc
// someObj.role[0] = "2";
// uncaught by tsc because there is no way for
// it to know the number of times your function/method is being called
someObj.role.push(100);
//works
someObj.role = [20, "read-only user"];
//caught by tsc
// someObj.role = [];


// enums

enum Role {ADMIN, READ_ONLY_USER};

const newObj: {
	role: [number, string];
} = {
	role: [Role.ADMIN, "admin"],
}

"use strict";
var str = "0";
var num = 5;
var general = 15;
//type assertion
num = str;
var _new;
_new = general;
console.log(num);
console.log(_new);
var list = [];
var strList = [];
var addToList = function (item1, item2) {
    list.push(item1);
    if (item2)
        list.push(item2);
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
var someObj = {
    role: [1, "admin"]
};
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
})(Role || (Role = {}));
;
var newObj = {
    role: [Role.ADMIN, "admin"]
};
//unions
var newFunc = function (firstItem, secondItem) {
    if (typeof firstItem === "number") {
        console.log("passed in number : " + firstItem);
        if (typeof secondItem === "number")
            console.log("and number : " + secondItem);
    }
    else {
        console.log("passed in string : " + firstItem);
        if (typeof secondItem === "string")
            console.log("and string : " + secondItem);
    }
};
newFunc(1, "hey");
newFunc(8, 100);
newFunc("joy", "hazel");

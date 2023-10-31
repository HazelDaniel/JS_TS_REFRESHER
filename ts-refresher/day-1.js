"use strict";
var str = "0";
var num = 5;
var general = 15;
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
var addToStrList = function (item1, item2) {
    if (!strList.includes(item1))
        strList.push(item1);
    if (item2 && item2.match("\w+@\w+.\w+") && !strList.includes(item2))
        strList.push(item2);
};
addToList(2, 23);
console.log(list);
addToStrList("home :", "victoria");
addToStrList("home :", "vic@toria.com");
console.log(strList);

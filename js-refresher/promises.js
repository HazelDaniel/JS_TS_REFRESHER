"use strict";

//setTimeout promisified
const wait = function (seconds) {
	return new Promise((resolve)=>{
		setTimeout(resolve, seconds * 1000);
	});
};

wait(1).then(()=> {
	console.log("1 seconds passed.");
	return wait(1);
}).then(()=> {
		console.log("2 seconds passed.");
		return wait(1);
}).then(()=> {
		console.log("3 seconds passed.");
		return wait(1);
}).then(()=> {
		console.log("4 seconds passed.");
});

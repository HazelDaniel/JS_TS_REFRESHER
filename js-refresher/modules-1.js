//using iife induced namespace
// Module1 =(
// 	function () {
// 		const list = [];

// 		const addTwoNumbers = (a, b) => {
// 			console.log(a+b);
// 		}

// 		const addToList = (a) => {
// 			list.push(a);
// 		}

// 		return {
// 			addTwoNumbers,
// 			addToList,
// 			list
// 		}
// 	}
// )();


// const list = [];

// const addToList = (a) => {
// 	list.push(a);
// }


// // using named exports
// export {list, addToList};


// const list = [];
//using default exports
// export default (a) => {
// 	list.push(a);
// 	console.log(list);
// }
//
//mixing default exports with named exports
export default function (a) {
	list.push(a);
}
const list = [];

export {list};

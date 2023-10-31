//using iife induced namespace
Module1 =(
	function () {
		const list = [];

		const addTwoNumbers = (a, b) => {
			console.log(a+b);
		}

		const addToList = (a) => {
			list.push(a);
		}

		return {
			addTwoNumbers,
			addToList,
			list
		}
	}
)();

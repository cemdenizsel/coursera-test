// var message = "in global";
// console.log("global: message = " + message);

// var a = function(){
// 	var message = "inside a";
// 	console.log("a: message = " + message);
// 	b();
// }

// function b (){
// 	console.log("b:message = " + message);
// }

// a();

// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute.");
// }else{
// 	console.log("All false.");
// }

// if (true && "hello" && 1 && -1 && "false") { /// they are all true because there is not  an empty string
// 	console.log("All true");
// }


// Curly brace on the same line or next line...
// Is it just a style?
function a(){
	return 
	{
		name:"Yaakov"
	};
}

function b(){
	return {
		name:"Yaakov"
	};
}

console.log(a());
console.log(b());

//For loop
var sum = 0;
for( var i=0; i< 10;i ++){
	sum +=i;
}
console.log("sum of 0 through 9 is: " + sum);



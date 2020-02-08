// Arrays

// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name){
// 	console.log("Hello " + name);
// };
// array[3] = {course : " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

//Short hand array creation
// var names = ["Yaakov", "John", "Joe"];

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
// 	name: "Yaakov",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };
// for(var prop in myObj){
// 	console.log(prop + ":" + myObj[prop] );
// }

// names2.greeting = "hi";

// for(var prop in names2){
// 	console.log("Hello " + names2[prop]);
// }


//Closures
function makeMultiplier(multiplier){

	function b(){
		console.log("multiplier is: " + multiplier);
	}
	b();

	return (
		function(x){
			return multiplier* x;
		}
		);
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));




















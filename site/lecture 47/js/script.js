// Copy by Reference vs by Value


// var a =  { x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b update: ");
// console.log(a);
// console.log(b);

// function changePrimitive(primValue){
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);

//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value: ");
// console.log(value);

function changeObject(objValue){
  console.log("in changeObject..");
  console.log("before:");
  console.log(objValue);

  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x:7 };
changeObject(value); //objValue = value
console.log("after changeObject, orig value:");
console.log(value);

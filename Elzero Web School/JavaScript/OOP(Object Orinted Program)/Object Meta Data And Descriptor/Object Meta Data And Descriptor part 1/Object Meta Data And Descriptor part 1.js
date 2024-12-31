/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  //if (writable) is true I can edit their values on variable like (myObject) under
  writable: false,
  //if (enumerable) false it will be hidden from appear on the (console.log)
  enumerable: true,
  //if (configurable) false it will prevent any change on the value 3 or reDefine it
  configurable: false,
  value: 3,
});

Object.defineProperty(myObject, "c", {
  //if (writable) is true I can edit their values on variable like (myObject) under
  writable: false,
  //if (enumerable) false it will be hidden from appear on the (console.log)
  enumerable: true,
  //if (configurable) false it will prevent any change on the value 3 or reDefine it
  configurable: false,
  value: 200,
});

myObject.c = 100;

console.log(myObject);

// console.log(delete myObject.c);

for (const prop in myObject) {
  console.log(prop, myObject[prop]);
}


console.log(myObject);

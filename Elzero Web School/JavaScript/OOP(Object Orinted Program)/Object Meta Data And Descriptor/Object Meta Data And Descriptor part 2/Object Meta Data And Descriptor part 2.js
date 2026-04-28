/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  // These properties will get true in value by default (if I didn't type it)
  a: 1,    
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    // These properties will get false in value by default (if I didn't type it)
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject,'e'));

console.log(Object.getOwnPropertyDescriptors(myObject));


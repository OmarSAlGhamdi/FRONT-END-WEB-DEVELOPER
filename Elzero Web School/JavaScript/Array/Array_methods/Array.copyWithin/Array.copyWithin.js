/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

console.log(
  `
  ` +
    "⬇️  -------------✅ 1 First Example Start 1 ✅------------- ⬇️" +
    `
    `
);

/* ⬇️ ---------- 1 First Example On Udacity 1 ---------- ⬇️ */

let myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(3);

console.log(myArray);

/* ⬆️ ---------- 1 First Example On Udacity 1 ---------- ⬆️ */
console.log(
  `
  ` +
    "⬆️  -------------❌ 1 First Example Finish 1 ❌------------- ⬆️" +
    `
  
  
      `
);





console.log(
    "⬇️  -------------✅ 2 Second Example Start 2 ✅------------- ⬇️" +
      `
    `
  );    
  
  /* ⬇️ ---------- 2 Second Example On Udacity 2 ---------- ⬇️ */
  
  let myArray2 = [10, 20, 30, 40, 50, "A", "B"];

  myArray2.copyWithin(4, 6);

  console.log(myArray2);
  

  /* ⬆️ ---------- 2 Second Example On Udacity 2 ---------- ⬆️ */
  console.log(
    `
  ` +
      "⬆️  -------------❌ 2 Second Example Start 2 ❌------------- ⬆️" +
      `
  
  
      `
  );






 




  console.log(
    "⬇️  -----------✅ 🛠️💡🧪 1 First Experiment Example Start 🧪💡🛠️ ✅----------- ⬇️" +
      `
    `
  );
  /* ⬇️ ---------- 🛠️💡🧪 1 First Experiment Example 🧪💡🛠️ ---------- ⬇️ */
  
  let myArray3 = [10, 20, 30, 40, 50, "A", "B"];

  myArray3.copyWithin(1, -2, -1);

  console.log(myArray3);
  
  /* ⬆️ ---------- 🛠️💡🧪 1 First Experiment Example 🧪💡🛠️ ---------- ⬆️ */
  console.log(
    `
  ` +
      "⬆️  -----------❌ 🛠️💡🧪 1 First Experiment Example Finish 🧪💡🛠️ ❌----------- ⬆️" +
      `
  
  
      `
  );
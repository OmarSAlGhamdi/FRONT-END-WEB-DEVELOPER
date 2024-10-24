/* ⬇️ ----------------------- 4 Fourth Example On Udacity 4 ----------------------- ⬇️ : */

// Orginial Function
function Phone() {
    // Orginal Properties
    this.operatingSystem = "Android";
    this.screen = "bigScreen";
    this.granding = "grandy";
    this.screensize = 6;
  }
  
  //Phone.prototype.screenSize = 6; // The Prototype of Phone Function
  //screenSize belong to the new prototype
  //and it will not include in the Phone function or any other new object from it
  
  // Create New Object From Phone Function :
  const myPhone = new Phone();
  // Create myPhone object which is new object from Phone function
  
  const newObject2 = new Phone();
  
  // const own = myPhone.hasOwnProperty("operatingSystem");// took it from Phone function
  const own = myPhone.hasOwnProperty("operatingSystem"); // took it from Phone function
  const inherit = myPhone.hasOwnProperty("screenSize"); // took it from the prototype
  const newGrand = myPhone.hasOwnProperty("granding");
  const newObject = newObject2.hasOwnProperty("screensize");
  
  // Calling the Object and Property :
  console.log(`The condition of (own) object is ${own}`); //✅
  console.log(`The condition of (inherited) object is ${inherit}`); //❌
  console.log(`The condition of (grandy) object is ${newGrand}`); //✅
  console.log(`The condition of (newObject) object is ${newObject} `);
  
  /* ⬆️ ----------------------- 4 Fourth Example On Udacity 4 ----------------------- ⬆️ */
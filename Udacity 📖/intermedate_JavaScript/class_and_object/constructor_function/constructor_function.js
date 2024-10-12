//Second Example Video On Udacity :
function Hero(name , role){
  // We use this.name and this.role to make instance for each new object
  // (this.name) is the Refers to the property of the object that is being created by the constructor.
  //(name) (on the right):Refers to the parameter passed into the function.
  this.name = name; 
  // console.log(name);
  
  this.role = role;

  this.introduce = function(){
    //this refer to this object that i want to call 
    console.log(`My name is ${this.name} and my role is ${this.role}.`);
    
  }
}

let tylor = new Hero('Tylor' , 'Mother');

let omar = new Hero('Omar' , 'CEO');

// ✅ This can call directly because of the (console.log) inside the function:
tylor.introduce(); 
omar.introduce();

// ❌ This can't call directly because it didn't have (console.log) inside it:
console.log(omar.name);
console.log(omar.role);



//Second Example Video On Udacity :


/* -------------------------------------------------- */


//First Example Video On Udacity :

/* function SoftwareDeveloper() {
  this.favoritLangauge = 'JavaScript';
}

let developer = new SoftwareDeveloper();

developer() */

//First Example Video On Udacity :


/* -------------------------------------------------- */

//  : تجربتي في تطبيق الدرس 

let menu = {
  name: `Salted Caramel Ice Cream`,
  price: 2.95,
  ingredients: ["butter", "ice cream", "salt", "sugar"],
};

// The solution is :

console.log(`The result with Template Literal is :[${menu.ingredients}]`);
console.log('The result Square Bracket Notation is :'+ '[' + menu['ingredients'] +']');
console.log('The result with .Notation is :' + '['+  menu.ingredients + ']');


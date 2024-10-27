console.log("⬇️  ---------------------✅ First Example Start ✅--------------------- ⬇️");
console.log(``); // عشان يكون في مسافة قبل كلمة المثال

/* Subclasses
One of the benefits of implementing inheritance is that it allows you to 
reuse existing code. By establishing inheritance, we can subclass, that is, have 
a "child" object take on most or all of a "parent" object's properties while
retaining unique properties of its own.
 */

const bear = {
  claws: true,
  diet: "carniovre",
};

function PolarBear(){
    //
}

PolarBear.prototype = bear;

const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'cola';

console.log(`The snowball claws result is: ${snowball.claws}`);
console.log(`The snowball diet result is: ${snowball.diet}`);

console.log(`The result of the snowball proto is:  ${snowball.__proto__}`);
// The result on the broswer: 
// {claws: true, diet: 'carniovre'}

console.log(snowball.__proto__ === bear);


/* ⬆️ ----------------------- 1 First Example On Udacity GPT 1 ----------------------- ⬆️ */
console.log(``); // عشان يكون في مسافة قبل كلمة المثال
console.log("⬆️  ---------------------❌ First Example Finish ❌--------------------- ⬆️");
console.log(
`
`
);
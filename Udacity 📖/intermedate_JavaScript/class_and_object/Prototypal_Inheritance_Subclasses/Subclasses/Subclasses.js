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
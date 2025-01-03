/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/


let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{6}s/ig)); //  S[Three Numbers]S
console.log(serials.match(/s\d{4,5}s/ig)); //  S[Four or Five Numbers]S
console.log(serials.match(/s\d{4,}s/ig)); //  S[At Leadt Four]S

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
/* let mailsRe = /\w@\w\w.sa/ig; */           // o@nn.sa
/* let mailsRe = /\w+@\w+.(com|net)/ig; */    // osama@gmail.com, elzero@gmail.net
let mailsRe = /\w+@\w+.\w+/gi;                // o@nn.sa, osama@gmail.com, elzero@gmail.net, osama@mail.ru

console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
/* let numsRe = /0\d0/gi; */                // null (He wants like this 010 zero + digit + zero)
/* let numsRe = /0\d+0/gi; */               // 0110, 05120, 0560 (start with 0 + number + 0)
let numsRe = /0\d*0/gi;                     // 0110, 05120, 0560, 00  (All numbers)
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));

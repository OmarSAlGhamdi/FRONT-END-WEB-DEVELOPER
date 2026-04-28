/*
Import File 
*/

import { a, arr, saySomething as s } from "./main_Modules_Import_And_Export.js";
/* 
We can rename the import vairable / function like this : 
import { a, arr, saySomething as s } from "./main.js";
                                 ⬆ 
                                  */



/*
 if we want to import things from file we type import : 
import {a, arr , saySomething} from "./main.js"
impoert {the vairable / function we want to import} from "The name of the file.js"
*/


console.log(a);
console.log(arr);
console.log(s());


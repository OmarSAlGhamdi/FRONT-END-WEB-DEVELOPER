

/* 
Scope : 
-   Lexical Scope 
*/

/* 
Search :
-   Excution Context
-   Lexical Environment
*/


/* 
The child and grandchild can search for the value for 
a inside parent scope but parent can't search for value 
inisde child or grandchild scope
*/

function parent(){
    let a = 10;

    function child(){
        // let a = 20;
        console.log(a);
        console.log(`From child ${a}`);

        function grand(){
            let b = 100;
            console.log(`From Grand ${a}`);
            console.log(`From Grand ${b}`);
        }
        grand();
    }
    child();
}

parent();


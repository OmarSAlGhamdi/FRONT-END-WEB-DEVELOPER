
// How to show the 2 Dimensions Array to the Output
// Type the name of the array and the name of the for loop inside square bracket []

var grid = [["glazed", "chocolate glazed", "cinnamon"],
            ["powdered", "sprinkled", "glazed cruller"],
            ["chocolate cruller", "Boston creme", "creme de leche"]];


           for(var row = 0; row <grid.length; row++){
            // He type the name of the array - grid - on the (second for Loop) a and type the First loop(row) to compare it with 
            // the Second Array(column)
            for(var column = 0; column < grid[row].length; column++){
                console.log(grid[row][column]);
            }
           }
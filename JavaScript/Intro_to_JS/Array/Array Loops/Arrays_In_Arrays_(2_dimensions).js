var grid = [[1 , 2  , 3 , 4 , 5], 
           [6 , 7  , 8 , 9 , 10],
           [11, 12, 13, 14, 15]];


for(var r = 0; r < grid.length; r++){
    // You have to mention the bigger array inside the inner array like this grid[r].length
    for(var c = 0; c <grid[r].length; c++){


        console.log(grid [r][c]);
    }
}
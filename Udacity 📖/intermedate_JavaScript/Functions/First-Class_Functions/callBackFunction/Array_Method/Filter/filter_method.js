// Filter syntax : 




// example of the filter : 

const names = ['David' , 'Richard', 'Veronika'];

const shortNames = names.filter(function(name){
    return name.length < 6;
});

console.log(shortNames);

/* --- Map Practice - Exercise Solution --- */
// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const end = start.map(x => abs(x - 11))
console.log(end)
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

const result = shipMates.map(arr => arr.reverse().join(': '))
console.log(result)

// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

const result = awayTeam.map((name, i) => `${name}: ${i % 2 === 0 ? 'even' : 'odd'}`)
console.log(result)
// expected output: Array: ["Picard: even", "Riker: odd", etc...]


// ----------------------------------------------------------
/* 3. --- Create a multidimensional array of each item and its index in the original Array --- */

const sciFiShows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

const result = sciFiShows.map((show, index) => [show, index])
console.log(result)
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 4. For each item in this array, create a multidimensional array containing the entire original array

const numbers = [1, 2, 3, 4]

const result = numbers.map((num, index, wholeArray) => wholeArray)
console.log(result)
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]

/* --- Advanced Map Practice - Exercise Solution --- */

// One common thing we use `map` for in real life is to reformat objects to have a shape that is better for our purposes. For instance, we only care about the name and first three characters of the id for the races below. Use `map` to grab those values and create a new array with them.

var index = [
    {key: 1, sector: 10, t_score: 18, id: '1236n7e8', value: 'Klingon'},
    {key: 4, sector: 145, t_score: 12, id: '293847hs8', value: 'Minbari'},
    {key: 8, sector: 214, t_score: 5, id: '283hy8347', value: 'Cylon'},
    {key: 3, sector: 8346, t_score: 10, id: 'n9837ks857', value: 'Jawa'},
]

const result = index.map((race) => {
    return { name: race.value, idFirstThree: race.id.substring(0,3)}
})
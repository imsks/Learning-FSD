/**
 * 1. Array
 * 2. Loops
 * 3. Functions
 * 4. Arrow Function
 * 5. Objects
 * 6. Advanced Loops
 */

const train = ["C1", "C2", "C3", "C4", "C5"]

// for (let i = 0; i < train.length; i++) {
//     console.log(i)
// }

// function addItemToArray(item, freq = 1) {
//     for (let i = 0; i < freq; i++) {
//         train.push(item)
//     }
// }

const addItemToArray = (item, freq = 1) => {
    for (let i = 0; i < freq; i++) {
        train.push(item)
    }
}

addItemToArray("C6", 5)

console.log("HERE", train)

const celeb = {
    name: "A",
    age: 28,
    city: "C",
    awards: []
}

// // /**
// //  * 1. Array
// //  * 2. Loops
// //  * 3. Functions
// //  * 4. Arrow Function
// //  * 5. Objects
// //  * 6. Advanced Loops
// //  */

// // const train = ["C1", "C2", "C3", "C4", "C5"]

// // // for (let i = 0; i < train.length; i++) {
// // //     console.log(i)
// // // }

// // // function addItemToArray(item, freq = 1) {
// // //     for (let i = 0; i < freq; i++) {
// // //         train.push(item)
// // //     }
// // // }

// // const addItemToArray = (item, freq = 1) => {
// //     for (let i = 0; i < freq; i++) {
// //         train.push(item)
// //     }
// // }

// // addItemToArray("C6", 5)

// // console.log("HERE", train)

// // const celeb = {
// //     name: "A",
// //     age: 28,
// //     city: "C",
// //     awards: []
// // }

// // String
// const student = "kopal,minakshi,rajnish,aarti"

// // console.log(student)

// // Object
// const director = {
//     name: "S.S Rajamauli",
//     age: 45,
//     movies: ["Bahubali", "Bahubali 2", "RRR"],
//     getAllMovies() {
//         return this.movies
//     }
// }

// const getAllMovies = () => {
//     return director.movies
// }

// director.movies = ["A"]

// console.log(director.getAllMovies())
// console.log(getAllMovies())

// Functional Constructor
function Director(name, age, movies) {
    this.name = name
    this.age = age
    this.movies = movies
    this.getAllMovies = function () {
        return this.movies
    }
}

const director1 = new Director("S.S Rajamauli", 45, [
    "Bahubali",
    "Bahubali 2",
    "RRR"
])

console.log(director1.getAllMovies())

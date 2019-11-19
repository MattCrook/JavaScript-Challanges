/*
Iterate over the array to fill another array with 5 "potato slices" strings for every potato. 
*/

const potatoPieces = [];

const wholePotatoes = [
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato"
];


// using for..in loop:
for (potato in wholePotatoes) {
    for (let i = 1; i <= 5; i++) {
        potatoPieces.push("potato pieces");
    }
}
/*
// using for..of loop:

for (potato of wholePotatoes) {
[1,2,3,4,5].forEach((i) => {
potatoPieces.push("potato pieces");
});
}
console.log(potatoPieces.length);

// using for loop:

for (i = 0; i < wholePotatoes.length; i++) {
[1,2,3,4,5].forEach((i) => {
potatoPieces.push("potato pieces");
});
}
console.log(potatoPieces.length);
*/

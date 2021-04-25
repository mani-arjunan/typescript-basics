const avengers = [
    { first: 'Tony', last: 'Stark' },
    { first: 'Tonsy', last: 'Parker' },
    { first: 'Tony', last: 'Starsdk' }
]


const uniqueKey = new Map(
    avengers.map((avenger) => [avenger.first + '' + avenger.last, avenger])
)
const uniqueKey1 = new Map(
    avengers.map((avenger) => [avenger.first, avenger])
)


console.log(uniqueKey.values())
console.log(uniqueKey1)
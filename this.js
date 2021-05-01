const person = {
    points: 23,
    score: () => {
        console.log(this.points)
        return this.points++
    }
}


console.log(person.score())
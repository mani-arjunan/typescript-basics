// type SampleObj = {
//     name: string | number | number[];
//     job: string;
// }
interface SampleObj {
    name: string | number | number[];
    job: string;
} 
// more or less same as type


const sample : SampleObj = {
    name: [123],
    job: 'se'
}



/** Type definitions */

type StringArray = Array<string> | Array<number>

// const arr: StringArray = [1, 2, 2]

interface Name<Type> {
    getName: () => Type;
    addName: (str: Type) => void
}

declare const name1: Name<number>

console.log(name1.getName())
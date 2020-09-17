//give first reoccuring character
let array1 = [2,5,1,2,3,5,1,2,4]
let array2 = [2,1,1,2,3,5,1,2,4]
let array3 = [2,3,4,5]

function firstReccuringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined;
}


console.log(firstReccuringCharacter(array2))
console.log('pyramid')

function pyramid(n) {
    const midpoint = Math.floor((n * 2 - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level)
    }
}



// function pyramid(n, row = 0, level = '') {

//     if (row === n) {
//         return;
//     }
//     if (level.length === 2 * n - 1) {
//         console.log(level);
//         return pyramid(n, row + 1)
//     }

//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }
//     pyramid(n, row, level + add)
// }

pyramid(7)
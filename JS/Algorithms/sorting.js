console.log('sorting')
//bubble sorting works by comparing the first and second index 
//if the first index is larger, it swaps it with the second and moves on.
//not very efficient time  O(n^2)   space O(n1)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([2, 1, 56, 43, 7, 8]))


//selection sort still O (n^2)
//starts by finding the smallest item and replacing it for the first
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

//insertion sort can sometimes be O(N)
//starts with comparing the first 2 indexes, then takes the next index and compares it to those two
function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        for (j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                var temp = array.splice(i, 1);
                array.splice(j, 0, temp[0])
            }
        }
    }
    return array
}

console.log(insertionSort([4, 6, 12, 34, 25, 3, 2]))


//merge Sort O(N log N)
//using recursion we divide and conquer
//divide the list in half and so on
//then compare the pairs that were divided
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}
console.log(mergeSort([2, 56, 43, 25, 12, 3, 4]))

//quick sort best case O(N log N) worst case O(N^2) space O(log N)
//picks a pivot point and compares the indexes around it

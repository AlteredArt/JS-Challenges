//merge two sorted array
function mergeSortedArray(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let n = 1;
  
    if (array1.length === 0) {return array2}
    if (array2.length === 0) {return array1}
  
    while (array1Item || array2Item) {
      if (!array2Item || array1Item < array2Item) {
        mergedArray.push(array1Item)
        array1Item = array1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[n]
        n++
      }
    }
    return mergedArray;
  }
  console.log("merged sorted", mergeSortedArray([5,9,22], [1, 4,6,30]));
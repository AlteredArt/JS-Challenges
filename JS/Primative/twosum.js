//two sums to target value
var twoSum = function(nums, target) {
    var result = []

    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};
console.log(twoSum([2, 7, 11, 15], 18));


var twoSumAlt = function(nums, target) {
    var result = [];
    nums.forEach(function(num, i) {
        var diff = target - num;
        var k = nums.indexOf(diff);
        if ( k > -1 && k !== i) {
            result.push(i);
            result.push(k);
        }
    });
    return result;
}
console.log("alt:", twoSumAlt([2, 7, 11, 15], 9));

//Best
function twoSum_On_Best(arr, target) {
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
console.log("best:", twoSum_On_Best([2, 7, 11, 15], 9));


/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {

    arr.sort((a,b) => a - b);

    let smallestDiff = arr[1] - arr[0];
    let ret = [[arr[0], arr[1]]];

    for (let i = 2; i < arr.length; i++) {
        let diff = arr[i] - arr[i-1];
        if (diff == smallestDiff) ret.push([arr[i-1], arr[i]]);
        else if (diff < smallestDiff){
            smallestDiff = diff;
            ret = [[arr[i-1], arr[i]]];
        }
    }

    return ret;
    
};
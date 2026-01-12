/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {

    sum = 0;

    for (let i = 0; i < points.length-1; i++){
        sum += timeToVisit(points[i], points[i+1]);
    }
    
    return sum;
};

var timeToVisit = function(n, m) {

    let left = (n[0] < m[0]) ? 1 : -1;
    let up = (n[1] < m[1]) ? 1 : -1;
    let sum = 0;

    while (n[0] !== m[0] || n[1] !== m[1]) {

        if (n[0] !== m[0]) n[0] += left;
        if (n[1] !== m[1]) n[1] += up;

        sum++;

    }

    return sum;
}
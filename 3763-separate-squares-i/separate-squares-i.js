/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let min = Infinity;
    let max = -Infinity;

    // 1. Find the global boundaries
    for (const [x, y, l] of squares) {
        min = Math.min(min, y);
        max = Math.max(max, y + l);
    }

    let fMin = min;
    let fMax = max;

    // 2. Binary search for 100 iterations to ensure maximum precision
    for (let iter = 0; iter < 100; iter++) {
        let mid = (fMin + fMax) / 2;
        let areaBelow = 0;
        let areaAbove = 0;

        for (const [x, y, l] of squares) {
            // Calculate how much of this square's height is below the line 'mid'
            let heightBelow = Math.max(0, Math.min(l, mid - y));
            areaBelow += heightBelow * l;

            // Calculate how much of this square's height is above the line 'mid'
            let heightAbove = Math.max(0, Math.min(l, (y + l) - mid));
            areaAbove += heightAbove * l;
        }

        // 3. To find the MINIMUM y-coordinate when multiple exist:
        // If areaBelow is already enough, try moving the line DOWN (fMax = mid)
        if (areaBelow >= areaAbove) {
            fMax = mid;
        } else {
            fMin = mid;
        }
    }

    return fMax;
};
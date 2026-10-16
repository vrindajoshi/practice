
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1000000007; // modulo
    const n = nums.length; // length of the array

    const sum = new Array(4 * n).fill(0); 
    const sumSq = new Array(4 * n).fill(0);
    const lazy = new Array(4 * n).fill(0);

    function update(node, start, end, l, r) {
        if (l > end || r < start) return;

        if (l <= start && end <= r) {
            const len = end - start + 1;
            const x = 1;

            sumSq[node] = (
                sumSq[node] + 2 * x * sum[node] + len * x * x
            ) % MOD;

            sum[node] = (sum[node] + len * x) % MOD;
            lazy[node] = (lazy[node] + x) % MOD;
            return;
        }

        const mid = Math.floor((start + end) / 2);
        pushDown(node, start, end);

        update(node * 2, start, mid, l, r);
        update(node * 2 + 1, mid + 1, end, l, r);

        sum[node] = (sum[node * 2] + sum[node * 2 + 1]) % MOD;
        sumSq[node] = (sumSq[node * 2] + sumSq[node * 2 + 1]) % MOD;
    }

    function pushDown(node, start, end) {
        if (lazy[node] === 0 || start === end) return;

        const mid = Math.floor((start + end) / 2);
        const x = lazy[node];

        apply(node * 2, mid - start + 1, x);
        apply(node * 2 + 1, end - mid, x);

        lazy[node] = 0;
    }

    function apply(node, len, x) {
        sumSq[node] = (
            sumSq[node] + 2 * x * sum[node] + len * x * x
        ) % MOD;

        sum[node] = (sum[node] + len * x) % MOD;
        lazy[node] = (lazy[node] + x) % MOD;
    }

    function query() {
        return sumSq[1];
    }

    let ans = 0;
    const lastSeen = new Map();

    for (let i = 0; i < n; i++) {
        const prev = lastSeen.has(nums[i])
            ? lastSeen.get(nums[i])
            : -1;

        update(1, 0, n - 1, prev + 1, i);

        lastSeen.set(nums[i], i);
        ans = (ans + query()) % MOD;
    }

    return ans;
};

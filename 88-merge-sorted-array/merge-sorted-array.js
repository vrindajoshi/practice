/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let N = 0; // how many elements from nums2 we've inserted
    let i = 0;

    // iterate only over the original nums1 elements + inserted ones
    while (i < m + N && N < n) {
        if (nums1[i] > nums2[N]) {
            nums1.splice(i, 0, nums2[N]);
            N++;
        }
        i++;
    }

    // if nums2 still has elements left, append them
    while (N < n) {
        nums1.splice(i, 0, nums2[N]);
        N++;
        i++;
    }

    // remove extra elements beyond m + n
    nums1.length = m + n;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (root == null) {
        return 0;
    }

    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);

    return 1 + Math.max(left_depth, right_depth);
};
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    if (root == null) return [];
    
    let arr = [];

    let arrLeft = inorderTraversal(root.left);
    for (let i = 0; i < arrLeft.length; i++){
        arr.push(arrLeft[i]);
    }
    arr.push(root.val);
    let arrRight = inorderTraversal(root.right)
    for (let i = 0; i < arrRight.length; i++){
        arr.push(arrRight[i]);
    }
    
    return arr;
};
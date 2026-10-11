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
 * @return {boolean}
 */
var isSymmetric = function(root) {

    if (root == null) return true;
    p = root.left;
    q = root.right;

    // invert tree
    invertTree(q);
    
    // compare
   return isSameTree(p, q);

};

var invertTree = function(root) {

    if (root == null) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    console.log(root.val);

    invertTree(root.left);  
    invertTree(root.right); 

    return root;
};

var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;

    if (p.val != q.val) return false;

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
    let setA = new Set();
    let setB = new Set();

    let tempA = headA;
    let tempB = headB;

    while (tempA != null && tempB != null) {
        if (tempA === tempB) return tempA;

        if (setB.has(tempA)) return tempA;
        if (setA.has(tempB)) return tempB;

        setA.add(tempA);
        setB.add(tempB);

        tempA = tempA.next;
        tempB = tempB.next;
    }

    while (tempA != null) {
        if (setB.has(tempA)) return tempA;
        tempA = tempA.next;
    }

    while (tempB != null) {
        if (setA.has(tempB)) return tempB;
        tempB = tempB.next;
    }

    return null;
};

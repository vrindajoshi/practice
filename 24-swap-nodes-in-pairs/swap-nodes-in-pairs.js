/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if (head == null) return head;

    let h1 = new ListNode(0);
    h1.next = head;

    swap(h1);

    return h1.next;   
};

var swap = function(prev) {

    if (prev.next == null || prev.next.next == null) return;

    let first = prev.next;
    let second = prev.next.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    swap(first);
}
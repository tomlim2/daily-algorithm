const D20 = {
  removeDuplicatesfromSortedList: function (head: any): any {
    let curr = head;
    while (curr && curr.next) {
      if (curr.val == curr.next.val) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return head;
  },
};

export default D20;

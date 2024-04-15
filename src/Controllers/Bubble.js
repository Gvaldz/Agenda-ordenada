export class Bubble {
    static sort(linkedList) {
        let swapped;
        do {
            swapped = false;
            let current = linkedList.head;
            while (current && current.next) {
                if (current.contact.name > current.next.contact.name) {
                    const temp = current.contact;
                    current.contact = current.next.contact;
                    current.next.contact = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);
    }
}

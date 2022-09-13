import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('must add new elements', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append('x');

    expect(linkedList.toString()).toBe('1,2,x');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe('x');
  });

  it('must add element to the very beginning', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append('x');
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe('3,1,2,x');
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe('x');
  });

  it('Must find element in linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append('x');

    expect(linkedList.find('d')).toBeNull();
    expect(linkedList.find('x').toString()).toBe('x');
  });

  it('Must remove element', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append('x');

    expect(linkedList.delete(1).toString()).toBe('1');
    expect(linkedList.toString()).toBe('2,x');
    linkedList.delete('x');
    expect(linkedList.toString()).toBe('2');
  });
});

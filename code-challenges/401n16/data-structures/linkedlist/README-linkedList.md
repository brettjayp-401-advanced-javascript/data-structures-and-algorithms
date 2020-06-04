# Linked List Implementation


    
## Links

[linked list PR](https://github.com/brettjayp-401-advanced-javascript/data-structures-and-algorithms/pull/12)
    
## Challenge

In this lab / code challenge, we are starting to work with data structures. In this case, we are using JavaScript classes to create linked lists. To start with, we need to create one class for nodes, and one class for singly linked lists. As a stretch goal, we will create another class for doubly linked lists.
    
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
    
## API
<!-- Description of each method publicly available to your Linked List -->
    
## Testing
<!-- Description of how to run your tests -->










## Code Descriptions

### Class: Node
- Constructor creates new instance requiring a value
- Includes .next and .prev, default to null
- No methods or functions

### Class: LinkedList
- Constructor creates new instance with no requirements, includes a size counter
- Purpose is to hold a singly linked list of nodes
- .sizeOf()
  - console logs the linked list size using the counter
- .insert(val)
  - inserts a new Node at the head, requiring a value
  - if a head node exists, sets current head as new node's next
  - set head to new node
  - increases size counter
- .includes(val)
  - local scope position variable, default is head
  - while condition set to position is not null
    - if position value matches val, return true
    - position progresses to next
  - if true is not returned, false is returned
- .toString()
  - local scope position variable, default is head
  - local scope out variable, default is empty string
  - while condition set to position is not null
    - add formatted template literal to out containing position value
    - position progresses to next
  - add end statement to out string
  - console log out

### Class: DoubleLinkedList
#### Compare to: Class: LinkedList
- Purpose is to hold a doubly linked list of nodes
- .insertAtHead(val)
  - if a head node exists, sets new node as current head's prev, otherwise, sets new node as tail
  - sets current head as new node's next
- .toStringNext()
  - is same as .toString() from Class: LinkedList
- .toStringPRev()
  - purpose is same as .toString()/.toStringNext(), except results are read in opposite order, NULL -> tail -> ... -> head
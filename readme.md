1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: getElementById,getElementsByClassName, querySelector,querySelectorAll are some useful function of js.

getElementById- when we need to work with a specific item of our code we can use an id in our html file and can access it in our js file by getElementById. We can do many kind of manipulation with this.Like: changing text color, adding backgourndImg, adding border and many more. Normally we use id as a unique thing. we don't use same id in multiple place. but if we do and use getElementById, it will work on only the first id.

getElementsByClass- when we need to do a same task for some elements, we can use class. which we notate by using getElementsByClass. using loops we can do many awsome task with this.

we have discussed about getElementById, getElementsByClass. if we use them , we get htmlitems.

querySelector- we can find a element by using his className, idName, attributes. but if use this we only get the first element of what we tried to access for.

querySelectorAll- we can find a element by using his className, idName, attributes. but if use this we get all the elements of what
we tried to access for.

2. How do you **create and insert a new element into the DOM**?
ans: document.createElement('element tag; like:'p'')
3. What is **Event Bubbling** and how does it work?
ans: by event bubbling we can get into many element those are not directly linked. like there is a p tag selected. now i can go to the parent of p and then parent of pParent and so on.
4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:when we use any eventListener to child element,
that event bubbles up the dom tree. This means the event is also received by the other parent
5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans:preventDefault is used for stopping refresh in a button in a form tag.
stopPropagation-stops propagating 


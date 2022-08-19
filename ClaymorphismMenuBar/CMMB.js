let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((listItem) => listItem.classList.remove('active')); //* Remove the active class from all the 'not selected' list items
    this.classList.add('active');   //* add the active class to the listItem that invoked the click event 
} //activeLink() is passed as a callback function below

list.forEach((listItem) => listItem.addEventListener('click', activeLink)) //! activeLink is passed here, not called!
// "For each list item, add an event listener and on invocation of the click event, perform the activeLink function"
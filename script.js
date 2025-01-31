const btnopen = document.querySelector('button.open')
const popup = document.querySelector('dialog.open')
btnopen.addEventListener('click', () => {
    popup.showModal();

})
const close = document.querySelector('.cancel')
close.addEventListener('click', () => {
    removeinputs()
    popup.close()
})
let myLibrary = [];
//Get Radio buttons
const radio_buttons = document.querySelectorAll('input[name="book"]')
//Get title author and page of book
class Book {

    constructor(title, author, page, index, radio_buttons) {
        this.index = index
        this.title = title;
        this.author = author;
        this.page = page;
    }
    
    radio_buttons() {
        for (const radioButton of radio_buttons) {
            if (radioButton.checked) {
                return 'Read';
            }
            return 'Not read'
        }
    }
}
//Bookmark here
//Idea: First push all the objects in array and make it appear in index.html using loop and using parent-child relations
let pos = 0, counter = 0;
//This Function add elements and other stuffs like pushing in array
function addBookToLibrary(event) {
    event.preventDefault()
    let obj = {}
    let title = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let page = document.getElementById('page').value;
    if (title !== "" && author !== "" && page !== "") {
        obj = new Book(title, author, page, counter, radio_buttons);
        myLibrary.push(obj)
    }
    const grid = document.querySelector('.container-books')
    let name = document.createElement('div')
    name.innerHTML = `Name: ${obj.title}`
    let authorBook = document.createElement('div')
    authorBook.textContent = `Author: ${obj.author}`
    let pageBook = document.createElement('div')
    pageBook.textContent = `Pages: ${obj.page}`
    let read_check = document.createElement('button')
    read_check.innerHTML = obj.radio_buttons();
    toogle_read(read_check)
    let delete_book = document.createElement('button')
    delete_book.textContent = 'Remove'
    delete_book.setAttribute('position', pos)
    let parent = document.createElement('div')
    parent.appendChild(name);
    parent.appendChild(authorBook);
    parent.appendChild(pageBook);
    parent.appendChild(read_check)
    parent.appendChild(delete_book)
    parent.setAttribute('position', Number(pos))
    pos++;
    grid.appendChild(parent)
    removeinputs();
    popup.close();
    addClass(name, authorBook, pageBook, read_check, delete_book, parent)
    removebooks();
}
//When Clicked on Submit Add all the details of book to library
const submit = document.querySelector('form')
submit.addEventListener('submit', addBookToLibrary)
//Clear all the inputs of form
function removeinputs() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        input.value = ''
    })
    radio_buttons.forEach((button) => {
        button.checked = false
    })
}
//Toggle Button Read or Not Status
function toogle_read(button) {
    if (button.textContent === 'Read') button.style.backgroundColor = 'lightgreen'
    else button.style.backgroundColor = '#FFCCCB'
    button.addEventListener('click', () => {
        if (button.textContent === 'Read') {
            button.textContent = 'Not read'
            button.style.backgroundColor = '#FFCCCB'
        }
        else if (button.textContent === 'Not read') {
            button.textContent = 'Read'
            button.style.backgroundColor = 'lightgreen'
        }
    })
}
function addClass(name, authorBook, authorPage, read_check, delete_book, parent) {
    name.classList.add("book-name");
    authorBook.classList.add("book-author");
    authorPage.classList.add("book-page")
    read_check.classList.add("read-check")
    delete_book.classList.add("remove-book")
    parent.classList.add("book-items")
}
function removebooks() {
    const buttons = document.querySelectorAll('.remove-book')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let book_index = Number(button.getAttribute('position'))
            let parent = document.querySelector(`.book-items[position="${book_index}"]`);
            myLibrary.splice(book_index, 1)
            parent.remove()
        })
    })

}

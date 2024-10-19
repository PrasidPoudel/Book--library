const btnopen = document.querySelector('button.open')
const popup = document.querySelector('dialog.open')
btnopen.addEventListener('click', () => {
    popup.showModal();
})
const close = document.querySelector('.cancel')
close.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        input.removeAttribute('required')
    })
    popup.close()
})
const myLibrary = [];

let ischecked
var ele = document.getElementsByName('Choose');
for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) ischecked = 'Read';
    else ischecked = 'unread'
}

//Get title author and page of book

function Book(title, author, page, index) {
    this.index = index
    this.title = title;
    this.author = author;
    this.page = page;
    index++;
}
//Bookmark here
//Idea: First push all the objects in array and make it appear in index.html using loop and using parent-child relations
function addBookToLibrary() {
    let counter=0
    let i=0
    let title = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let page = document.getElementById('page').value;
    let obj = new Book(title, author, page,counter);
    myLibrary.push(obj)
        const grid=document.querySelector('.container-books')
        let name = document.createElement('div')
        name.innerHTML = `${myLibrary[i].title}`
        let authorBook = document.createElement('div')
        authorBook.textContent = `${myLibrary[i].author}`
        let pageBook = document.createElement('div')
        pageBook.textContent = `${myLibrary[i].page}`
        let parent=document.createElement('div')
        parent.appendChild(name);
        parent.appendChild(authorBook);
        parent.appendChild(pageBook);
        grid.appendChild(parent)
        removeinputs();
        i++;
}
const submit = document.querySelector('.send_data')
submit.addEventListener('click', addBookToLibrary)

function removeinputs() {
    const inputs=document.querySelectorAll('input')
    inputs.forEach((input)=>{
        input.value=''
    })
}

const myLibrary = [];
const display = [];
function Book(title, author, numPages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }
  
  function addBookToLibrary() {
    // do stuff here
    const newTitle = prompt('new book title');
    const newAuthor = prompt('new book author');
    let newBook = new Book(newTitle, newAuthor);
    myLibrary.push(newBook);
  }

function displayLibrary() {
    const div = document.querySelector(".card-container");
    for (let i = 0; i < myLibrary.length; i++) {
        if (!display.includes(myLibrary[i])) {
            div.innerHTML += `
            <div class="card">
                <div class="card-text">
                <h3>${myLibrary[i].title}</h3>
                <p>${myLibrary[i].author}</p>
                <p>${myLibrary[i].numPages}</p>
                <p>${myLibrary[i].read}</p>
                </div>
                <div class="button-div">
                    
                </div>
            </div>
            `
            display.push(myLibrary[i]);
        }
    }
}

const btn = document.querySelector(".form-submit");

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const numPages = document.querySelector("#numPages");
const read = document.querySelector("#read");

btn.addEventListener("click", (event) => {
    let newBook = new Book(bookTitle.value, bookAuthor.value, numPages.value, read.value);
    myLibrary.push(newBook);
    displayLibrary();
    bookTitle.value = "";
    bookAuthor.value = "";
    numPages.value = "";
    read.value = "";
    event.preventDefault();
})

let removeBtn = document.createElement("button");
removeBtn.classList.add("remove");


removeBtn.addEventListener("click", (event) => {
    let temp = document.querySelector(".button-div");
    temp.appendChild(removeBtn);
    console.log(event.target.parentElement.parentElement);
    event.target.parentElement.parentElement.remove();
})








const myLibrary = [];



function Book(title, author, numPages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    if (read == "yes") 
        this.read = true
    else {
        this.read = false
    }
  }
  
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayLibrary();
    
}

function displayLibrary() {
    const div = document.querySelector(".card-container");
    div.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        div.innerHTML += `
            <div class="card">
                <div class="card-text">
                <h3>${myLibrary[i].title}</h3>
                <p>${myLibrary[i].author}</p>
                <p>${myLibrary[i].numPages}</p>
                <p id="book-read" style="${myLibrary[i].read ? "background-color: red" : "background-color: blue"}">${myLibrary[i].read ? "Read" : "Not Read Yet"}</p>
                </div>
                <div class="button-div">
                    <button class="card-btn" onclick="removeBook(${i})">Remove</button>
                    <button class="card-btn" onclick="toggleRead(${i})">Read</button>
                </div>
                
            </div>
            `
    }
}

const btn = document.querySelector("#form-post");

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const numPages = document.querySelector("#numPages");
const read = document.querySelector("#read");

btn.addEventListener("submit", (event) => {
    
    let newBook = new Book(bookTitle.value, bookAuthor.value, numPages.value, read.value);
    myLibrary.push(newBook);
    displayLibrary();
    bookTitle.value = "";
    bookAuthor.value = "";
    numPages.value = "";
    read.value = "";
    event.preventDefault();

})


function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}







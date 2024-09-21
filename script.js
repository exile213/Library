let hiddenPanel = document.getElementById("bg-form-container");
let newBookButton = document.getElementById("new-button");
let cancelButton = document.getElementById("cancel-button");
let submitButton = document.getElementById("submit-button");


//form inputs 
let bookTitle = document.getElementById("booktitle");
let bookAuthor = document.getElementById("bookauthor");
let noOfPages = document.getElementById("pageno");
let didRead = document.getElementById("isread");

newBookButton.addEventListener("click",function(){
   hiddenPanel.style.visibility = "visible";
});

cancelButton.addEventListener("click",function(){
  hiddenPanel.style.visibility = "hidden";
});

submitButton.addEventListener("click",function(){
  addBookToLibrary();
  //displayBooks();
  event.preventDefault();
});





//ODIN PROJECT LOGIC
let myLibrary = [];


//-------------------------------------------
//constructor
function book(title,author,pages,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
  newBook = new book(bookTitle.value,bookAuthor.value,noOfPages.value,didRead.checked);
  myLibrary.push(newBook);
  console.log(myLibrary[0].title);
}

function displayBooks(){
    for(let i = 0; i<=Array.length-1;i++){
        
    }
}
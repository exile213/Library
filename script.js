let hiddenPanel = document.getElementById("bg-form-container");
let newBookButton = document.getElementById("new-button");
let cancelButton = document.getElementById("cancel-button");

newBookButton.addEventListener("click",function(){
   hiddenPanel.style.visibility = "visible";
});

cancelButton.addEventListener("click",function(){
  hiddenPanel.style.visibility = "hidden";
});





//ODIN PROJECT LOGIC
const myLibrary = [];

//constructor
function book(title,author,pages,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}
function addBookToLibrary() {
  // do stuff here
}

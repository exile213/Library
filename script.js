let hiddenPanel = document.getElementById("bg-form-container");
let newBookButton = document.getElementById("new-button");
let cancelButton = document.getElementById("cancel-button");
let submitButton = document.getElementById("submit-button");

//grid container
let gridContainer = document.getElementById("grid-card-container");


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
  hiddenPanel.style.visibility = "hidden";
  event.preventDefault();
  addBookToLibrary();
  displayBooks();

});





//ODIN PROJECT LOGIC
const myLibrary = [];


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

  //clear form after add
  bookTitle.value="";
  bookAuthor.value="";
  noOfPages.value="";
  didRead.checked=false;
}

function displayBooks(){
    //DELETE PREEXISTING GRID CARDS
    const deleteVar = gridContainer.querySelectorAll(".grid-card");
    deleteVar.forEach((deleteCard)=>{deleteCard.remove()});


    //CREATE AND DISPLAY 
    for(let i = 0; i<=myLibrary.length-1;i++){
      //create grid card
       let newCard = document.createElement("div");
       newCard.className = "grid-card";

      //create book info elements
      let newTitle =document.createElement("div");
      let newAuthor =document.createElement("div");
      let newPages =document.createElement("div");
      let newRead = document.createElement("div");
      
      //adds class to new book info elements
      newTitle.className = "grid-text";
      newAuthor.className = "grid-text"
      newPages.className = "grid-text";
      newRead.className = "grid-text";

      //add text content to the book info elements
      newTitle.textContent = "Book title: " + myLibrary[i].title;
      newAuthor.textContent = "Book author: "+ myLibrary[i].author;
      newPages.textContent = "Number of Pages: "+ myLibrary[i].pages;
      newRead.textContent = "Has been Read? "+myLibrary[i].isRead;

      //add book info elements inside grid card
      newCard.appendChild(newTitle);
      newCard.appendChild(newAuthor);
      newCard.appendChild(newPages);
      newCard.appendChild(newRead);

      //add grid card element to grid card container element
      gridContainer.appendChild(newCard);
    }
}
let hiddenPanel = document.getElementById("bg-form-container");
let newBookButton = document.getElementById("new-button");
let cancelButton = document.getElementById("cancel-button");
let submitButton = document.getElementById("submit-button");

//grid container
let gridContainer = document.getElementById("grid-card-container");


//form inputs 
let form = document.getElementById("form-container");
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

form.addEventListener("submit",function(){
  hiddenPanel.style.visibility = "hidden";
  event.preventDefault();
  addBookToLibrary();
  displayBooks();
  })





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
      let readButton = document.createElement("button");
      let deleteButton = document.createElement("button");

      
      //adds class to new book info elements
      newTitle.className = "grid-text";
      newAuthor.className = "grid-text";
      newPages.className = "grid-text";
      readButton.className = "grid-read";
      deleteButton.className = "grid-delete";


      //add text content to the book info elements
      newTitle.textContent = "Book title: " + myLibrary[i].title;
      newAuthor.textContent = "Book author: "+ myLibrary[i].author;
      newPages.textContent = "No. of Pages: "+ myLibrary[i].pages;
      deleteButton.textContent= "Delete";

      //check if book has been read
      if(myLibrary[i].isRead == true){
        readButton.style.background = "var(--secondary-color)";
        readButton.textContent = "Has been Read";
      } else{
        readButton.style.background = "red";
        readButton.textContent = "Has not been Read";
      }

      //add elements inside grid card
      newCard.appendChild(newTitle);
      newCard.appendChild(newAuthor);
      newCard.appendChild(newPages);
      newCard.appendChild(readButton);
      newCard.appendChild(deleteButton);

      //add grid card element to grid card container element
      gridContainer.appendChild(newCard);


      //Read button event listener
      readButton.addEventListener("click",function(){
        if(myLibrary[i].isRead == true){
          myLibrary[i].isRead = false;
          readButton.style.background = "red";
          readButton.textContent = "Has not been Read";
        } else{
          myLibrary[i].isRead = true;
          readButton.style.background = "var(--secondary-color)";
          readButton.textContent = "Has been Read";
        }
      });


      //DELETE button event listener
      deleteButton.addEventListener("click",function(){
        let targetCard = gridContainer.querySelectorAll(".grid-card");
        targetCard[i].remove();
        myLibrary.splice(i,1);
      });
    }
}
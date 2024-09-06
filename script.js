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

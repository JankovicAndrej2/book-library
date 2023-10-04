function Book(name, author,number, didRead){
    this.nameOfBook = name;
    this.nameOfAuthor = author;
    this.numberOfPages = number;
    this.didReadIt = didRead;
}

let library = [];



const addNewBookButton = document.querySelector('.add-new-book');
const modal = document.querySelector('.add-new-book-dialog');
const closeNewBook = document.querySelector('.close-new-book');
var form = document.getElementById('form');



addNewBookButton.addEventListener('click', () =>{
    modal.open = true;
});

closeNewBook.addEventListener('click', () =>{
    modal.open = false;
    form.reset();
});


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name = document.getElementById('name-of-author').value;
    let nameOfBook = document.getElementById('name-of-book').value;
    let numberOfPages =document.getElementById('number-of-pages').value;
    let didYouRead = document.getElementById('did-you-read').checked;

    let tempBook = new Book(name, nameOfBook, numberOfPages, didYouRead);
    library.push(tempBook);


    form.reset();
    modal.open = false;
})
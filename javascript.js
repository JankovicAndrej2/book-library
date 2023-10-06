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
var gridContainer = document.querySelector(".grid-container");
let submitButton = document.getElementById("edit");


function VisualizeLibrary(){
    gridContainer.replaceChildren();
    
    library.forEach((element, index) => {
        var div = document.createElement("div");
        var input = document.createElement("div");
        var input1= document.createElement("div");
        var input2 = document.createElement("div");
        var buttons = document.createElement("div");

        input.appendChild(document.createTextNode(element.nameOfAuthor + " "));
        input.classList.add("name-of-author");
        div.appendChild(input);
        

        input1.appendChild(document.createTextNode(element.nameOfBook + " "));
        input1.classList.add("name-of-book");
        div.appendChild(input1);
        

        input2.appendChild(document.createTextNode(element.numberOfPages));
        div.appendChild(input2);
        input2.classList.add("number-of-pages");
        



        var deleteButton = document.createElement("button");

        //brisanje knjige
        deleteButton.addEventListener('click', ()=>{
            library.splice(index,1);
            VisualizeLibrary();
            form.reset();
        })



        var editButton = document.createElement("button");
        editButton.addEventListener('click', ()=>{
            modal.open=true;
            let name1 = document.getElementById('name-of-author');
            let nameOfBook1 = document.getElementById('name-of-book');
            let numberOfPages1 =document.getElementById('number-of-pages');

            submitButton.innerHTML="";
            submitButton.appendChild(document.createTextNode("Edit"));
            
            VisualizeLibrary();
            form.reset();
        })
       


        
        buttons.classList.add("buttons");
        deleteButton.classList.add("delete-button");
        editButton.classList.add("edit-button");

        deleteButton.textContent = "Delete";
        editButton.textContent = "Edit";

        

        
        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        div.appendChild(buttons);



        div.classList.add("parent");
        gridContainer.appendChild(div);
    });
}  


addNewBookButton.addEventListener('click', () =>{
    modal.open = true;
    submitButton.innerHTML="";
    submitButton.appendChild(document.createTextNode("Submit"));
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

    if (numberOfPages == ""){numberOfPages = "0";}
    let didYouRead = document.getElementById('did-you-read').checked;



    let tempBook = new Book(name, nameOfBook, numberOfPages, didYouRead);
    library.push(tempBook);



    VisualizeLibrary();
    // Vizualiziranje librarija

    
    

    form.reset();
    modal.open = false;
})











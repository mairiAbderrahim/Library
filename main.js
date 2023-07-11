

let popup = document.body.querySelector(".popup");
let addbtn = document.body.querySelector(".btnaddadd");
let formclose = document.body.querySelector("#formclose")
addbtn.addEventListener("click", function() {
    popup.style.display = "block";
});

formclose.addEventListener("click", function() {
    popup.style.display = "none";
});









function addBookToShelf(title, author, pages, ReadInput) {
    // Create new book element
    var bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `${title} By ${author}  </br> Has ${pages} Pages </br> ${ReadInput ? "You Did Read It" : "You didnt Read It"}`;
  
    // Append book to bookshelf
    var bookshelf = document.getElementById("bookshelf");
    bookshelf.appendChild(bookElement);
  }

  document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    let ReadInput = document.querySelector("input[type=checkbox]").checked;

;
    // Add book to bookshelf
    addBookToShelf(title, author, pages, ReadInput);

    // Reset form fields
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pagesInput").value = "";
    document.getElementById("ReadInput").checked = "";
});
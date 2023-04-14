class Book {
  constructor(title, publisher, isbn) {
    this.title = title;
    this.publisher = publisher;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    // Create element
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.publisher}</td>
            <td>${book.isbn}</td>
            <td> <a href ="#" class ="delete">X</a>
            </td>
          </tr>
        `;
    list.appendChild(row);
  }

  showAlert(message, classname) {
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = `alert ${classname}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector(".book-container");

    const form = document.querySelector("#form");

    container.insertBefore(div, form);

    // Timeout
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(event) {
    const target = event.target;
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Event Listeners for add book

const formBook = document.getElementById("form");

formBook.addEventListener("submit", function submitHandle(e) {
  e.preventDefault();
  const title = document.getElementById("title").value,
    publisher = document.getElementById("publisher").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, publisher, isbn);
  console.log(book);

  //   instaniate UI
  const ui = new UI();

  // validate
  if (title === "" || publisher === "" || isbn === "") {
    // Error Alert
    ui.showAlert("please fill in all fields", "error");
  } else {
    // add book to list
    ui.addBookToList(book);

    // show success

    ui.showAlert("Book Added!", "success");

    // clear fields
    ui.clearFields();
  }
});

// Event Listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e);
  ui.showAlert("Book Removed!", "success");
});

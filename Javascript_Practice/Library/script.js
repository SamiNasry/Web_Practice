const The_Library = [];

function book(title, author, pages)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const harry = new book("Harry", 'Sami' , 500);
const book2 = new book("random", "ran" , 10);

The_Library.push(harry);
The_Library.push(book2);

function displayBooks() {
    const table = document.querySelector("table");

    The_Library.forEach(book => {
        let row = document.createElement("tr");

        let titleCell = document.createElement("td");
        titleCell.textContent = book.title;

        let authorCell = document.createElement("td");
        authorCell.textContent = book.author;

        let pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);

        table.appendChild(row);
    });
}

displayBooks();
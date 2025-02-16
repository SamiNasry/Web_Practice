const The_Library = [];

function book(title, author, pages)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const harry = new book("Harry", 'Sami' , 500);
const book2 = new book("random", "ran" , 10);

The_Library.push(harry, book2);
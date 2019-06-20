console.log("linked");

//to create an array of books
const books = [
  { id: "book1", author: "author1", alreadyRead: false },
  { id: "book2", author: "author2", alreadyRead: false },
  { id: "book3", author: "author3", alreadyRead: false },
  { id: "book4", author: "author4", alreadyRead: false }
];
//to display the contents
let displayBook = function(books1) {
  return books1.map(book =>
        `<li>The ${book.id} Written by ${book.author} and it is read/unread
        <input type="checkbox" id=${book.id} ${chkbox(book)} onChange="changed(this)" > </li>`).join(" ");
};


// ${read(book)}


let chkbox = book => {
  if (book.alreadyRead) {
    return "checked";
  } else {
    return "unchecked";
  }
};
let show = () => {
    let template = `<ul>${displayBook(books)}</ul>`;
    console.log(template);
    document.getElementById("container").innerHTML = template;
  };
  show();
//to describe read or unread
// let changed = book => {
//   console.log(book.id);
//   books.map(b => {
//     if (b.id == book.id) {
//       b.alreadyRead = !b.alreadyRead;
//     }
//   });
//   console.log(books);
//   show();
// };

// let read = book => {
//   if (book.alreadyRead) return "Read";
//   else {
//     return "Unread";
//   }
// };


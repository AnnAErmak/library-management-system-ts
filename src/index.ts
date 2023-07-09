import {BookManager} from "./interfaces/BookManager";
import {Reader} from "./interfaces/Reader";
import {Librarian} from "./interfaces/Librarian";
import {Admin} from "./interfaces/Admin";
import {UserManager} from "./interfaces/UserManager";
import {Role} from "./bd/types";

const bookManager = new BookManager()
const userManager = new UserManager()
const ivan = new Reader('Ivan')
const ira = new Librarian('Ira')
const oleg = new Admin('Oleg')


// console.log( userManager.deleteUser(25, oleg))
// console.log(userManager.updateUser(25, {name: 'Oleg', email:'oleg@mail.ru'}, oleg))
// console.log( userManager.showAllUser(oleg))
// console.log( userManager.showAllUser(ira))
// console.log(bookManager.deleteBook(1, ira))
// console.log(bookManager.deleteBook(2, ira))
// console.log(bookManager.deleteBook(3, ira))
// console.log(userManager.addNewUser(    {
//     name: 'Diam',
//     email: 'email@mail.com',
//     role: Role.reader
// }, oleg))
//
// console.log(userManager.addNewUser(    {
//     name: 'L',
//     email: 'L',
//     role: Role.librarian
// }, oleg))
//
// console.log(userManager.addNewUser(    {
//     name: 'A',
//     email: 'A',
//     role: Role.admin
// }, oleg))

// console.log(bookManager.searchByParams({
//     bookTitle: "nulla eget",
//     year: 2007
// }, ira))
//
// console.log(bookManager.updateBook(1,   {
//     id: 1,
//     bookTitle: "1",
//     author: "1",
//     genre: ["Comedy"],
//     year: 2007
// }, ira))
//
//
// console.log(bookManager.updateBook(4,   {
//     bookTitle: "2",
//     author: "2",
// }, ira))
// console.log(bookManager.deleteBook(1, ira))
// console.log(bookManager.deleteBook(2, ira))
// console.log(bookManager.deleteBook(3, ira))

// console.log(bookManager.addNewBook(    {
//     bookTitle: 'diam',
//     author: 'Lyndel Duthy',
//     genre: [],
//     year: 1997
// }, ira))

// console.log(bookManager.searchByYear(2007, ira))
//  console.log(bookManager.searchByAuthor('    urieL       Smithies', ivan))
//   console.log(bookManager.searchByGenre('Comedy', ivan))
//   console.log(ivan.addBookToFavorites(1))
//   console.log(ivan.addBookToFavorites(2))
//   console.log(ivan.getFavorites())
//   console.log(ivan.addCommentToBook({idBook: 1, comment:"Фигня лучше не читать", rating: 1}))
//   console.log(ivan.addCommentToBook({idBook: 2, comment:"Фигня лучше не читать", rating: 1}))
//   console.log(ivan.getComments())


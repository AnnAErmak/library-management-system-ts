import {Book, Role} from "../types/types";
import {books} from "../bd/books";
import {User} from "./User";

type SearchParam = {
  bookTitle?: string
  author?: string
  year?: number
}

type BookParam = {
  bookTitle: string
  author: string
  genre: string[]
  year: number
}

export class BookManager {
  books: Book[] = books

  showAllBooks (): Book[] | undefined{
    return this.books
  }

  searchByYear(year: number, user: User): Book[] | string {
    if (user.role === Role.reader) return this.books.filter(book => book.year === year)

    return 'Осущетвлять поиск книг могут только "читатели"!'
  }

  searchByAuthor (author: string, user: User): Book[] | string{
    if (user.role === Role.reader) {
      return this.books.filter(book => book.author.toLowerCase().replace(/ /g,'') === author.toLowerCase().replace(/ /g,''))
    }

    return 'Осущетвлять поиск книг могут только "читатели"!'
  }

  searchByTitle (title: string, user: User): Book[] | string{
    if (user.role === Role.reader) {
      return this.books.filter(book => book.bookTitle.toLowerCase().replace(/ /g,'') === title.toLowerCase().replace(/ /g,''))
    }

    return 'Осущетвлять поиск книг могут только "читатели"!'
  }

  searchByGenre (genre: string, user: User): Book[] | string{
    if (user.role === Role.reader) {
      return this.books.filter(book => book.genre.includes(genre))
    }

    return 'Осущетвлять поиск книг могут только "читатели"!'
  }

  searchByParams(searchParams: any, user: User): Book[] | string{
    const bookList: Book[] = this.books.reduce((acc: any, el: any) => {
      for (let key in searchParams){
        if(el[key] === searchParams[key]){
            acc.push({...el})
            break
        }
    }
      return acc
    }, [])

    return bookList
  }


  addNewBook(newBook:BookParam, user:User): Book[] | string{
    if (user.role === Role.librarian) {
        this.books.push({...newBook, id:Math.random()})
        return this.books
    }

    return 'Добавлять книги может только "Библиотекарь"'
  }

  deleteBook(id:number, user:User): Book[] | string{
    if (user.role === Role.librarian) {
      this.books = this.books.filter(book => book.id !== id)
      return this.books
    }
    return 'Удалять книги может только "Библиотекарь"'
  }

  updateBook(id: number, editedBook:Partial<BookParam>, user:User): Book[] | string{
    if (user.role === Role.librarian) {
      this.books = this.books.map(book => book.id === id ? {...book, ...editedBook} : {...book})
      return this.books
    }
    return 'Редактировать книги может только "Библиотекарь"'
  }
}

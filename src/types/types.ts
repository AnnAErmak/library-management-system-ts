export type Book = {
  id: number
  bookTitle: string
  author: string
  genre: string[]
  year: number
}

export type Comment = {
  idBook: number;
  comment: string;
  rating: number;
}

export type TUser ={
  id: number
  name: string
  role: string
  email: string
  favorites?: number[]
  comments?: Comment[] | null
}

export enum Role {
  admin = 'ADMIN',
  librarian = "LIBRARIAN",
  reader = "READER"
}

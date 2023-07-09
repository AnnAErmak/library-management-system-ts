import {Role, Comment} from "../types/types";
import {User} from "./User";

export class Reader extends User{
  readonly favorites: number[] = []
  readonly comments: Comment[] = []

  constructor(name: string, email: string = 'email@mail.ru') {

    super(name, email, Role.reader)
  }

  addBookToFavorites(id: number): string {
    if(!this.favorites.includes(id)) {
      this.favorites.push(id)
      return 'Книга успешна добавлена'
    }else{
      return 'Такая книга уже есть в спике избранных'
    }
  }

  addCommentToBook (comment: Comment){
    this.comments.push(comment)
    return 'Ваш комментарий успешно добавлен'
  }

  getFavorites (): number[] {
    return this.favorites
  }

  getComments (): Comment[]{
    return this.comments
  }
}

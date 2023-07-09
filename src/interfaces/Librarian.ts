import {User} from "./User";
import {Role} from "../bd/types";

export class Librarian extends User{

    constructor(name: string, email: string = 'email@mail.ru') {
        super(name, email, Role.librarian);
    }
}
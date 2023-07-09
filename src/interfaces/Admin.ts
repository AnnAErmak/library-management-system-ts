import {User} from "./User";
import {Role} from "../types/types";

export class Admin extends User{

    constructor(name: string, email: string = 'email@mail.ru') {
        super(name, email, Role.admin)
    }
}
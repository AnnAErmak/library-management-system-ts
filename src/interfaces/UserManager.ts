import {Book, Role, TUser} from "../bd/types";
import {users} from "../bd/users";
import {User} from './User'
import {Reader} from "./Reader";
import {Librarian} from "./Librarian";
import {Admin} from "./Admin";

type UserParam = {
    name: string
    email: string
    role: Role
}

export class UserManager{
    userList: TUser[] = users
    adminList: string[] = ['Oleg', 'Dima']

    showAllUser(user: User): TUser[] | string{
        if (this.adminList.includes(user.name)){
            return this.userList
        }
        return 'Просматривать списки пользователей может только "Администратор"'
    }

    addNewUser(newUser: UserParam, user:User): TUser[] | string{
        if (this.adminList.includes(user.name)){
            switch (newUser.role){
                case Role.reader:
                    const newReader = new Reader(newUser.name)
                    this.userList.push({...newReader})
                    return this.userList
                case Role.librarian:
                    const newLibrarian = new Librarian(newUser.name)
                    this.userList.push({...newLibrarian})
                    return this.userList
                case Role.admin:
                    const newAdmin = new Admin(newUser.name)
                    this.userList.push({...newAdmin})
                    this.adminList.push(newAdmin.name)
                    return this.userList
                default:
                    return `Невозможно создать пользователя с ролью: " ${newUser.role} "`
            }
        }

        return 'Добавлять пользователей может только "Администратор"'
    }

    deleteUser(id:number, user:User): TUser[] | string{
        if (this.adminList.includes(user.name)){
            this.userList = this.userList.filter(user => user.id !== id)
            return this.userList
        }
        return 'Удалять пользователей может только "Администратор"'
    }

    updateUser(id: number, editedUser:Partial<UserParam>, user:User): TUser[] | string{
        if (this.adminList.includes(user.name)){
            this.userList = this.userList.map(user => user.id === id ? {...user, ...editedUser} : {...user})
            return this.userList
        }
        return 'Редактировать пользователей может только "Администратор"'
    }

}
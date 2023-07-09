import {Role} from "../bd/types";

export class User {
   readonly id: number
    readonly name: string
    readonly email: string
    readonly  role: Role

  constructor(userName: string, email:string, role: Role) {
    this.name = userName
    this.role = role
    this.email = email
    this.id = this.getId()
  }


  private getId (){
    return Math.random()
  }

}


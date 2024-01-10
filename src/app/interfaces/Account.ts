import { RoleType } from "./RoleType";

export class Account{
    constructor(
        public id_: string,
        public name: string,
        public password_: string,
        public role_: RoleType
    ){}

    get id(){
        return this.id_;
    }

    set id(newId: string){
        this.id_ = newId;
    }

    

    get password(){
        return this.password_;
    }

    set password(newPassword: string){
        this.password_ = newPassword;
    }

    get role(){
        return this.role_;
    }

    set role(role: RoleType){
        this.role_ = role;
    }
}
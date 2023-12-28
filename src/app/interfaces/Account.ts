import { RoleType } from "./RoleType";

export class Account{
    constructor(
        private id_: string,
        private username_: string,
        private password_: string,
        private role_: RoleType
    ){}

    get id(){
        return this.id_;
    }

    set id(newId: string){
        this.id_ = newId;
    }

    get username(){
        return this.username_;
    }

    set username(newUsername: string){
        this.username_ = newUsername;
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
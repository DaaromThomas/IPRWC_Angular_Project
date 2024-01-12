import { RoleType } from "./RoleType";

export class Account{
    constructor(
        public id: string,
        public name: string,
        public password: string,
        public role: RoleType
    ){}
}
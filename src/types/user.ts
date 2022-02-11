import {v1 as uuidV1, NIL} from 'uuid';

export class User {
    private id:string = NIL;
    private name:string = "default";
    private email:string = "default";
    private age:number = -1;

    constructor(input:{name:string,email:string, age:number}) {
        if(!input) return;
        this.name = input.name;
        this.age = input.age;
        this.email = input.email;
    }

    public getId():string {
        return this.id;
    }

    public setId(id:string) {
        this.id = id;
    }

    public getName():string {
        return this.name;
    }

    public getEmail():string {
        return this.email;
    }

    public getAge():number {
        return this.age
    }

    public setName(name:string) {
        this.name = name;
    }

    public setAge(age:number) {
        this.age = age;
    }

    public setEmai(email:string) {
        this.email = email;
    }

}
export class user {
    id:number;
    name:string;
    password:string;
    constructor(values:Object={}){
        Object.assign(this,values);

    }
}

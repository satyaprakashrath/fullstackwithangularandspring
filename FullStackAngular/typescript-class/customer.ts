export class Customer {
    //Convention to start private property name with underscore(_)
    /*private _firstName: string;
    private _lastName : string;

    constructor(firstName : string, lastName : string){
        this._firstName = firstName;
        this._lastName = lastName;
    }*/

    //shortcut constructor using parameter properties
    constructor(private _firstName : string, private _lastName : string ){}

    public get firstName(){
        return this._firstName
    }

    public set firstName(firstName : string){
        this._firstName = firstName;
    }

    public get lastName(){
        return this._lastName
    }

    public set lastName(lastName : string){
        this._lastName = lastName;
    }
}

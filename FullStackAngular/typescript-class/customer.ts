class Customer {
    private firstName: string;
    private lastName : string;

    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Satya", "Rath");
console.log(myCustomer)
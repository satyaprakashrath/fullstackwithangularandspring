class Customer {
    firstName: string;
    lastName : string;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Satya", "Rath");
console.log(myCustomer)
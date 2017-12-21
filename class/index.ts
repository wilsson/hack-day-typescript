class Person {
    constructor(
        public name: string,
        public age: number
    ){}
}

class Employee extends Person {
    constructor(
        public code: number,
        public name: string,
        public age: number
    ){
        super(name, age);
    }
}

let employee = new Employee(123123, 'wilson', 40);
console.log('>>', employee);
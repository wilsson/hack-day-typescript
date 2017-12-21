// String
let myString: string = 'myString';

// Number
let myNumber: number = 10;

// Boolean
let myBoolean: boolean = true;

// Enum
enum Power {
    maxPower =  100,
    minPower = 10
}

// Tuple
let x: [string, number];

x = ['string', 10];

//Array
let myArray: number[] = [1, 2, 3, 4];

let myArrayTwo: Array<number> = [1, 2, 3, 4];
// Void

let unusable: void = undefined;
function myFunction(): void {
    // TODO: code here
}

// Never
function error(message: string): never {
    throw new Error(message);
}


// Type assertion “angle-bracket”
let value: any = "this is a string";

let strLength: number = (<string>value).length;
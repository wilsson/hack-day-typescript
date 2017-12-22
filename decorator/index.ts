// Class Decorators - observe, modify, or replace a class definition

function Foo(){
    console.log('Foo : evaluated');
    return function(constructor: Function){
        console.log('Foo : called');
    }
}

function Bar(){
    console.log('Bar : evaluated');
    return function(constructor: Function){
        console.log('Bar : called');
    }
}

@Foo()
@Bar()
class MyClass {}

// Method Decorators - observe, modify, or replace a method definition
function MethodDecorator(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log('- - - - Method Decorators');
        console.log('target:', target);
        console.log('propertyKey:', propertyKey);
        console.log('descriptor:', descriptor);
        //descriptor.writable = false;
        descriptor.value = 100;
    }
}

class MyClassMethod {
    public max: string = 'asda';
    constructor(){}
    @MethodDecorator()
    myMethod(){
       return 'my method';
    }
}

let myClassMethod = new MyClassMethod();

// Property Decorators - only observed
function MyDecoratorForProperty(){
    return function(target: any, property: string){
        console.log('- - - - Property Decorators');
        console.log('target: ', target);
        console.log('property: ', property);
    }
}
class MyClassProperty {
    @MyDecoratorForProperty()
    name: string;
}
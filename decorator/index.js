// Class Decorators - observe, modify, or replace a class definition
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Foo() {
    console.log('Foo : evaluated');
    return function (constructor) {
        console.log('Foo : called');
    };
}
function Bar() {
    console.log('Bar : evaluated');
    return function (constructor) {
        console.log('Bar : called');
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass = __decorate([
        Foo(),
        Bar()
    ], MyClass);
    return MyClass;
}());
// Method Decorators - observe, modify, or replace a method definition
function MethodDecorator() {
    return function (target, propertyKey, descriptor) {
        console.log('- - - - Method Decorators');
        console.log('target:', target);
        console.log('propertyKey:', propertyKey);
        console.log('descriptor:', descriptor);
        //descriptor.writable = false;
        descriptor.value = 100;
    };
}
var MyClassMethod = /** @class */ (function () {
    function MyClassMethod() {
        this.max = 'asda';
    }
    MyClassMethod.prototype.myMethod = function () {
        return 'my method';
    };
    __decorate([
        MethodDecorator()
    ], MyClassMethod.prototype, "myMethod", null);
    return MyClassMethod;
}());
var myClassMethod = new MyClassMethod();
// Property Decorators - only observed
function MyDecoratorForProperty() {
    return function (target, property) {
        console.log('- - - - Property Decorators');
        console.log('target: ', target);
        console.log('property: ', property);
    };
}
var MyClassProperty = /** @class */ (function () {
    function MyClassProperty() {
    }
    __decorate([
        MyDecoratorForProperty()
    ], MyClassProperty.prototype, "name", void 0);
    return MyClassProperty;
}());

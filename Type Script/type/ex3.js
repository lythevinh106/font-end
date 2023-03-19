//***** param with array  vs es6*/
function getTotal(param) {
    var arr1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr1[_i - 1] = arguments[_i];
    }
    return arr1[arr1.length - 1];
}
///***note */ khong can truyen vao [];
console.log(getTotal(1, 6, 8, 9)); ////1  la param
function addNew1(a, b) {
    return a + b;
}
/////class
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Object.defineProperty(Person.prototype, "getCurrentAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setCurrentAge", {
        ///// like setter in oop
        set: function (age2) {
            this.age = age2;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.greet = function () {
        return "123";
    };
    Person.prototype.sayGender = function () {
        console.log("I identify as ".concat(this.gender, "."));
    };
    return Person;
}());
function getFullName(person) {
    return person.firstName + person.age;
}
var person4 = {
    firstName: "John",
    age: 30,
    address: "123 Main St"
};
var fullName = getFullName(person4);

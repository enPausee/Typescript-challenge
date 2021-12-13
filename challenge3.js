var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var personne1 = new Person("John", 40);
var personne2 = new Person("Mary", 35);
console.log(personne1);
console.log(personne2);

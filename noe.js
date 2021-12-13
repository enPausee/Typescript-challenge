var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, color, nbLegs) {
        this.name = name;
        this.color = color;
        this.nbLegs = nbLegs;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color, nbLegs) {
        if (nbLegs === void 0) { nbLegs = 4; }
        return _super.call(this, name, color, nbLegs) || this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color, nbLegs) {
        if (nbLegs === void 0) { nbLegs = 4; }
        return _super.call(this, name, color, nbLegs) || this;
    }
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, color, nbLegs) {
        if (nbLegs === void 0) { nbLegs = 2; }
        return _super.call(this, name, color, nbLegs) || this;
    }
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, color, nbLegs) {
        return _super.call(this, name, color, nbLegs) || this;
    }
    return Fish;
}(Animal));
var Insect = /** @class */ (function (_super) {
    __extends(Insect, _super);
    function Insect(name, color, nbLegs) {
        return _super.call(this, name, color, nbLegs) || this;
    }
    return Insect;
}(Animal));
function photograph(animal) {
    console.log("What a beautifull ".concat(animal.name, " !"));
}
function meow(cat) {
    cat instanceof Cat
        ? console.log("".concat(cat.name, " meows !"))
        : console.log("".concat(cat.name, " can't meow"));
}
function bark(dog) {
    dog instanceof Dog
        ? console.log("".concat(dog.name, " barks !"))
        : console.log("".concat(dog.name, " can't bark"));
}
function swim(fish) {
    fish instanceof Fish ? console.log("".concat(fish.name, " swims !")) : console.log("".concat(fish.name, " can't swim"));
}
function fly(bird) {
    bird instanceof Bird
        ? console.log("".concat(bird.name, " flies !"))
        : console.log("".concat(bird.name, " can't fly"));
}
function pet(animal) {
    animal.nbLegs >= 4
        ? console.log("".concat(animal.name, " is a good boy !"))
        : console.log("You can't pet this ".concat(animal.name));
}
function feed(animal) {
    animal.color === "black"
        ? console.log("".concat(animal.name, " is full after this delicious food"))
        : console.log("You can't feed this ".concat(animal.name));
}
var EuropeanCat = new Cat("European", "black", 4);
var CarthusianCat = new Cat("Carthusian", "", 4);
var NewfoundlandDog = new Dog("Newfoundland", "black", 4);
var MoonMoonDog = new Dog("MoonMoon", "", 4);
var BirdTit = new Bird("Tit", "", 2);
var BlackBird = new Bird("Blackbird", "black", 2);
var fishTuna = new Fish("tuna");
var fishShark = new Fish("shark");
var Maggot = new Insect("maggot");
var animals = [
    EuropeanCat,
    CarthusianCat,
    NewfoundlandDog,
    MoonMoonDog,
    BlackBird,
    BirdTit,
    fishTuna,
    fishShark,
    Maggot,
];
animals.forEach(function (animal) {
    console.log(animal.name + ":\n");
    photograph(animal);
    meow(animal);
    bark(animal);
    fly(animal);
    swim(animal);
    pet(animal);
    feed(animal);
    console.log("------------------------\n");
});

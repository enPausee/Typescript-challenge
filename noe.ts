interface FeatureAnimal {
  name: string;
  color?: string;
}

class Animal implements FeatureAnimal {
  name: string;
  color?: string;
  nbLegs?: number;

  constructor(name: string, color?: string, nbLegs?: number) {
    this.name = name;
    this.color = color;
    this.nbLegs = nbLegs;
  }
}

class Cat extends Animal {
  constructor(name: string, color?: string, nbLegs: number = 4) {
    super(name, color, nbLegs);
  }
}

class Dog extends Animal {
  constructor(name: string, color?: string, nbLegs: number = 4) {
    super(name, color, nbLegs);
  }
}

class Bird extends Animal {
  constructor(name: string, color?: string, nbLegs: number = 2) {
    super(name, color, nbLegs);
  }
}

class Fish extends Animal {
  constructor(name: string, color?: string, nbLegs?: number) {
    super(name, color, nbLegs);
  }
}

class Insect extends Animal {
  constructor(name: string, color?: string, nbLegs?: number) {
    super(name, color, nbLegs);
  }
}

function photograph(animal: Animal): void {
  console.log(`What a beautifull ${animal.name} !`);
}

function meow(cat: Cat): void {
  cat instanceof Cat
    ? console.log(`${cat.name} meows !`)
    : console.log(`${cat.name} can't meow`);
}

function bark(dog: Dog): void {
  dog instanceof Dog
    ? console.log(`${dog.name} barks !`)
    : console.log(`${dog.name} can't bark`);
}

function swim(fish: Fish): void {
    fish instanceof Fish ? console.log(`${fish.name} swims !`) : console.log(`${fish.name} can't swim`);
}

function fly(bird: Bird): void {
  bird instanceof Bird
    ? console.log(`${bird.name} flies !`)
    : console.log(`${bird.name} can't fly`);
}

function pet(animal: Animal): void {
  animal.nbLegs >= 4
    ? console.log(`${animal.name} is a good boy !`)
    : console.log(`You can't pet this ${animal.name}`);
}

function feed(animal: Animal): void {
  animal.color === "black"
    ? console.log(`${animal.name} is full after this delicious food`)
    : console.log(`You can't feed this ${animal.name}`);
}

let EuropeanCat = new Cat("European", "black", 4);
let CarthusianCat = new Cat("Carthusian", "", 4);

let NewfoundlandDog = new Dog("Newfoundland", "black", 4);
let MoonMoonDog = new Dog("MoonMoon", "", 4);

let BirdTit = new Bird("Tit", "", 2);
let BlackBird = new Bird("Blackbird", "black", 2);

let fishTuna = new Fish("tuna",);
let fishShark = new Fish("shark");

let Maggot = new Insect("maggot");

const animals: Animal[] = [
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

animals.forEach((animal) => {
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

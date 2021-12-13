class Person {
  constructor(protected name: string, protected age: number) {}

  tellMyName(): void {
    console.log(`I am ${this.name}`);
  }

  tellMyAge(): void {
    console.log(`I am ${this.age} years old`);
  }
}

const personne1 = new Person("John", 40);
const personne2 = new Person("Mary", 35);

console.log(personne1);
console.log(personne2);

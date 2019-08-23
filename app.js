function Person(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  const now = new Date().getFullYear();
  const age = now - this.yearOfBirth;
  console.log(`${this.name} is ${age} years old. And he is a ${this.job}`);
}
Person.prototype.fullName = function (lastName) {
  const full_name = `${this.name} ${lastName}`;
  console.log(full_name);
}



const John = new Person('John', 1996, 'Web Developer');
console.log(John);
John.calculateAge();
John.fullName('King');


console.log('-------------------------------------------------');

const Tesluach = new Person('Tesluach', 2000, 'Software Engineer');
console.log(Tesluach);
Tesluach.calculateAge();
Tesluach.fullName('Lul');

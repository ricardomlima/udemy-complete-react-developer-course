// Classes

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
    console.log("test");
  }
  getGreeting() {
    return `Hi. I am ${this.name} and I'm ${this.age} year(s) old`;
  }
}

const me = new Person("Ricardo", 30);
console.log(me.getGreeting());

class Student extends Person {
  constructor(name, age, major = "") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasMajor()) {
      greeting += ` and I study ${this.major}`;
    }
    return greeting;
  }
}

const meStudent = new Student("New Ricardo", 30, "Computer Science");
console.log(meStudent.getGreeting());
console.log(meStudent.hasMajor());

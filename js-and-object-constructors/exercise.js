function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

sonny = new Person('Sonny', 'sonny@gmail.com', '555-555-5555');

jordan = new Person('Jordan', 'jordan@gmail.com', '111-111-1111');

sonny.greet(jordan);
jordan.greet(sonny);

Person.prototype.getInfo = function(person) {
  console.log(this.email, this.phone);
};

sonny.getInfo();
jordan.getInfo();

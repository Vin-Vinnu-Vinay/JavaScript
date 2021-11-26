function Person() {}
/* Person.name = "";
Person.age = "";
Person.email = "";
Person.contact = ""; */
Person.prototype.init = function(name, age, contact, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.contact = contact;
};
Person.prototype.describe = function() {
  var description =
    "Person name is " +
    String(this.name) +
    " with an age of " +
    String(this.age) +
    " years.Contact number is " +
    String(this.contact) +
    " and emailID is " +
    String(this.email);
  return description;
};

/* function Add(a, b) {
  var addition = new Object();
  addition.a = a;
  addition.b = b;
  addition.add = function() {
    return this.a + this.b;
  };
  return addition;                  //Factory Pattern
}
var obj1 = new Add(1, 2);
var obj2 = new Add(2, 3);

var x = obj1.add();
var y = obj2.add();
console.log(x, y); */

function Add(a, b) {
  this.a = a;
  this.b = b;
  this.add = function() {
    return this.a + this.b; //Constructor Pattern
  };
}
obj1 = new Add(1, 2);
obj2 = new Add(3, 2);
obj1.add();
obj2.add();

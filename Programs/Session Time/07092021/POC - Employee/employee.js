let empList = [];
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function Add1() {
  for (x of employeeList) {
    let em = new Employee(x.name, x.age);
    empList.push(em);
  }
  console.log(empList);
}
function show() {
  let lst = [];
  for (let y of empList) {
    lst.push(y.name + " " + y.age);
  }
  document.getElementById("result").innerHTML = lst;
}

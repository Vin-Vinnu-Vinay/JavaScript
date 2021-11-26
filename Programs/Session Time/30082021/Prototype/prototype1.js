var Persons = [];
function addPerson() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var result = document.getElementById("error");
    if (name === "" || isNaN(age) || contact === "" || email === "") {
        result.innerHTML = "<font color = red>Invalid input</font>";
        return;
    }
    else {
        var person1 = new Person();
        person1.init(name, age, contact, email);

        Persons.push(person1);
    }
}
function getByAgeCondition() {
    var name = document.getElementById("nameCondition").value;

    var newList = Persons;
    if (age != 0) {
        newList = newList.filter(function (person1) {
            return person1.age <= age;
        });

        /* if(name.length !=0) {
            newList = newList.filter(function(person1){
                return person1.name.match(name);
            }) */
    }
    var personsList = "";
    for (person1 of newList) {
        personsList += person1.describe();
    }
    var listElement = document.getElementById("personsList");
    listElement.innerHTML = personsList;
}
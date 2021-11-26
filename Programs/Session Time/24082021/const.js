function Person(name, age) {
    this.name = name;
    this.age = Number(age);
    this.describe = () => {
        var description = "Name: " + this.name + "\t " + this.age + "\n";
        return description;
    }
};
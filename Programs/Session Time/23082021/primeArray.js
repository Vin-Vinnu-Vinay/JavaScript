function getValidArray(inputList) {
    var numbers = inputList.trim()
    numbers = numbers.split(" ")
    if (!numbers instanceof Array) {
        return [];
    }
    // make that as numbers
    numbers = numbers.filter(function (number) {
        return !isNaN(number);
    });
    numbers = numbers.map(function (number) {
        return Number(number);
    })
    return numbers;
}
function isPrime(number) {
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
function getPrimes() {
    var num1 = document.getElementById("arr1");
    var inputList = getValidArray(num1.value)
    if (inputList.length > 0) {
        inputList = inputList.filter(isPrime);
    }
    var result = inputList.join(" ");
    var primeResultElement = document.getElementById("primeList");
    primeResultElement.innerHTML = result
}
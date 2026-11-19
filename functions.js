
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(72));

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

function canVote(age) {
    if (age >= 18) {
        return "You can vote";
    } else {
        return "You cannot vote";
    }
}

console.log(canVote(20));
console.log(canVote(16));

function biggestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(biggestNumber(20, 45, 30));
console.log(biggestNumber(80, 25, 60));

function printNumbers() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

printNumbers();

function multiplicationTable(number) {
    for (let i = 1; i <= 12; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

multiplicationTable(5);
multiplicationTable(7);

function sumNumbers(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total;
}

console.log(sumNumbers(5));
console.log(sumNumbers(10));

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

function nairaToDollar(naira, exchangeRate) {
    return naira / exchangeRate;
}

console.log(nairaToDollar(15000, 1500));
console.log(nairaToDollar(30000, 1500));

function countVowels(word) {
    let count = 0;

    for (let letter of word.toLowerCase()) {
        if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));
console.log(countVowels("Education"));

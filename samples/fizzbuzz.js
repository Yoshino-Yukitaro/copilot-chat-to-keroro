function fizzBuzz(num) {
    if (num % 15 === 0) {
        return "FizzBuzzであります！";
    } else if (num % 3 === 0) {
        return "Fizzであります！";
    } else if (num % 5 === 0) {
        return "Buzzであります！";
    } else {
        return num.toString();
    }
}

// テスト用のループ
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}

module.exports = fizzBuzz;


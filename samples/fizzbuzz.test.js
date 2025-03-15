const fizzBuzz = require('./fizzbuzz');

test('3の倍数のとき「Fizzであります！」を返すであります', () => {
  expect(fizzBuzz(3)).toBe('Fizzであります！');
});

test('5の倍数のとき「Buzzであります！」を返すであります', () => {
  expect(fizzBuzz(5)).toBe('Buzzであります！');
});

test('15の倍数のとき「FizzBuzzであります！」を返すであります', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzzであります！');
});

test('3の倍数でも5の倍数でもないとき、その数を文字列で返すであります', () => {
  expect(fizzBuzz(1)).toBe('1');
});
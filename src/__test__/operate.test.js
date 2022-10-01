import operate from '../logic/operate';

test('Addition', () => {
  expect(operate(1, 2, '+')).toBe('3');
});
test('Substraction', () => {
  expect(operate(3, 2, '-')).toBe('1');
});

test('Multiplication', () => {
  expect(operate(3, 2, 'x')).toBe('6');
});

test('Multiplication', () => {
  expect(operate(4, 2, '÷')).toBe('2');
});

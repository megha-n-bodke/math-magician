import calculate from '../logic/calculate';

describe('test for AC button', () => {
  test('It should return null object ', () => {
    const obj = {
      total: 5,
      next: 3,
      operation: '+',
    };
    const btnValue = 'AC';
    const answer = calculate(obj, btnValue);
    expect(answer.total).toBe(null);
    expect(answer.next).toBe(null);
    expect(answer.operation).toBe(null);
  });
});

describe('Test for button with type of number', () => {
  test('case 1:if total and operation are null', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const btnValue = '0';
    const response = calculate(obj, btnValue);
    expect(response).toEqual({});
  });
});

describe('Test if there is an operation', () => {
  test('case 1:If there is an operation,update next which has a value', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: '+',
    };
    const btnValue = '1';
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('41');
  });
});

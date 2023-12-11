import { isValid } from './validParentheses';

describe('validParentheses test', () => {
  test('test "()" should be valid', () => {
    expect(isValid('()')).toBeTruthy();
  })

  test('test "[]" should be valid', () => {
    expect(isValid('[]')).toBeTruthy();
  })

  test('test "[()](){}" should be valid', () => {
    expect(isValid('[()](){}')).toBeTruthy();
  })
  
  test('test "[{{()}}](){}" should be valid', () => {
    expect(isValid('[()](){}')).toBeTruthy();
  })

  test('test "[" should be valid', () => {
    expect(isValid('[')).toBeFalsy();
  })

  test('test "[](){}" should be valid', () => {
    expect(isValid('[](){}')).toBeTruthy();
  })


  test('test "[)" should be not valid', () => {
    expect(isValid('[)')).toBeFalsy();
  })
})
import { evalRPN } from './evaluateReversePolishNotation';

describe('evalRPN test', () => {
  test('should evaluate 1 to 1', () => {
    expect(evalRPN(['1'])).toEqual(1);
  })

  test(`should evaluate "['1', '2', '+']" to 3`, () => {
    expect(evalRPN(['1', '2', '+'])).toEqual(3);
  })
  
  test(`should evaluate "['3', '2', '+']" to 5`, () => {
    expect(evalRPN(['3', '2', '+'])).toEqual(5);
  })

  test(`should evaluate "['3', '2', '-']" to 1`, () => {
    expect(evalRPN(['3', '2', '-'])).toEqual(1);
  })

  test(`should evaluate "['2', '2', '*']" to 4`, () => {
    expect(evalRPN(['2', '2', '*'])).toEqual(4);
  })

  test(`should evaluate "['2', '2', '/']" to 1`, () => {
    expect(evalRPN(['2', '2', '/'])).toEqual(1);
  })

  test(`should evaluate "['2', '2', '+', '10', '*']" to 40`, () => {
    expect(evalRPN(['2', '2', '+', '10', '*'])).toEqual(40);
  })
  
  test(`should evaluate "["4","13","5","/","+"]" to 6`, () => {
    expect(evalRPN(["4","13","5","/","+"])).toEqual(6);
  })

  test(`should evaluate "["10","6","9","3","+","-11","*","/","*","17","+","5","+"]" to 22`, () => {
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toEqual(22);
  })
})
import { generateParenthesis } from './validParentheses';

describe.only('generateParenthesis test', () => {
  it('should return () on 1', () => {
    expect(generateParenthesis(1)).toBe('()');
  })
})
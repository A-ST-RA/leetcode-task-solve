const operators = {
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '/': (first, second) => Math.trunc(first / second),
  '*': (first, second) => first * second,
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
export const evalRPN = (tokens) => {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!Number.isNaN(+tokens[i])) {
      stack.push(tokens[i]);
      continue;
    }
    const [second, first] = [+stack.pop(), +stack.pop()];
    stack.push(operators[tokens[i]](first, second));
  }

  return +stack[0];
};
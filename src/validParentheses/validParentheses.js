const map = {
  '[': ']',
  '{': '}',
  '(': ')',
};

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = (s) => {
  const stack = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (['{', '(', '['].includes(s[i])) {
      stack.push(s[i]);
      continue;
    }

    if (map[stack.pop()] !== s[i]) return false;
  }

  return stack.length === 0;
};

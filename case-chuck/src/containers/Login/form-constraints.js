const process = (regexp, str) => {
  return str.match(regexp);
};

export const isThreeStraightLetters = str => {
  const re = /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)+/gi;
  const result = process(re, str);
  return result ? result.length >= 1 : false;
};

export const havOverlap = str => {
  const re = /([a-z])\1/gi;
  const result = process(re, str);
  return result ? result.length >= 2 : false;
};

export const hasNotConfusingLetters = str => {
  const re = /(i|O|I|l)+/gi;
  const result = process(re, str);
  return result ? result.length === 0 : true;
};

export const hasNotUppercase = str => {
  const re = /([A-Z])+/g;
  const result = process(re, str);
  return result ? result.length === 0 : true;
};

const checkLength = str => {
  return str.length <= 32;
};

const validate = str => {
  return (
    isThreeStraightLetters(str) &&
    havOverlap(str) &&
    hasNotConfusingLetters(str) &&
    hasNotUppercase(str) &&
    checkLength(str)
  );
};

export default validate;

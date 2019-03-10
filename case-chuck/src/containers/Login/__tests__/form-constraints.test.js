import validate, {
  isThreeStraightLetters,
  havOverlap,
  hasNotConfusingLetters,
  hasNotUppercase
} from "../form-constraints";

describe("Password constraints", () => {
  test("isThreeStraightLetters", () => {
    const str = "abcgfjklmkrpqrxyz";
    const result = isThreeStraightLetters(str);

    expect(result).toBe(true);
  });

  test("havOverlap", () => {
    const str = "abccgfjkklmkrrpqrxyz";
    const result = havOverlap(str);

    expect(result).toBe(true);
  });

  test("hasNotConfusingLetters", () => {
    const str = "abccgIfjkklmkirrplqrOxyz";
    const result = hasNotConfusingLetters(str);

    expect(result).toBe(false);
  });

  test("hasNotUppercase", () => {
    const str = "abccgIfjkklmkiJrrplqrOxyzZ";
    const result = hasNotUppercase(str);

    expect(result).toBe(false);
  });

  test("validate", () => {
    const str = "aabcdejjkpqr";
    const result = validate(str);

    expect(result).toBe(true);
  });
});

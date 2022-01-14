import {
  trimString,
  removeObjPropImmutably,
  getIsValidNumber,
} from "../Utils/Utils";

describe("trimString util", () => {
  it("Positive trimming cases", () => {
    expect(trimString("LongName", 5)).toBe("LongN...");
    expect(trimString("LongName", 4)).toBe("Long...");
    expect(trimString("LongName", 10)).toBe("LongName");
    expect(trimString("    LongName    ", 3)).toBe("Lon...");
  });

  it("Negative trimming cases", () => {
    expect(trimString("      ", 4)).toBe("      ");
    expect(trimString(null, 4)).toBeNull();
    expect(trimString(undefined, 4)).toBeUndefined();
    // expect(trimString(12345, 4)).toBe("1234...");
  });
});

describe("removeObjPropImmutably util", () => {
  it("Positive checking cases", () => {
    const numbers = [1, 0, 0.5, "123", "321asd"];
    for (let index = 1; index < numbers.length; index++) {
      expect(getIsValidNumber(numbers[index])).toBeTruthy();
    }
  });

  it("Negative checking cases", () => {
    const notNumbers = ["asd321", "qwe", Infinity, undefined, null, [], {}];
    for (let index = 1; index < notNumbers.length; index++) {
      expect(getIsValidNumber(notNumbers[index])).toBeFalsy();
    }
  });
});

describe("getIsValidNumber util", () => {
  it("Positive removing", () => {
    expect(removeObjPropImmutably({ a: 1, b: 2 }, "b")).toMatchObject({ a: 1 });
    expect(removeObjPropImmutably({ a: () => {}, b: 2 }, "a")).toMatchObject({
      b: 2,
    });
  });

  it("Negative checking cases", () => {
    const notValidObjects = [undefined, null, [], {}, "asd", 45];
    for (let index = 1; index < notValidObjects.length; index++) {
      expect(removeObjPropImmutably(notValidObjects[index])).toMatchObject({});
    }
  });
});

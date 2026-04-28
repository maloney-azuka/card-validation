import { validateCardNumber } from "../src/service/card.service";

describe("validateCardNumber", () => {
  it("should return true for a valid Visa card number", () => {
    expect(validateCardNumber("4532015112830366")).toBe(true);
  });

  it("should return false for an invalid card number", () => {
    expect(validateCardNumber("12345678901234567789")).toBe(false);
  });

  it("should handle card numbers with spaces", () => {
    expect(validateCardNumber("4532 0151 1283 0366")).toBe(true);
  });

  it("should return false for non-numeric input", () => {
    expect(validateCardNumber("abcd-efgh-ijkl-mnop")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(validateCardNumber("")).toBe(false);
  });
});
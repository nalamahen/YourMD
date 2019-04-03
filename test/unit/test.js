// const filterInput = require("../../processInput");
// const matchInputWords = require("../../matchInputwords");

const { filterInput, compareWords } = require("../../processInput");

describe("Filtering input", () => {
  test("should filterInput funtion defined", () => {
    expect(filterInput).toBeDefined();
  });

  test("should remove non medical words and returns an array", () => {
    expect(filterInput("I have a sore throat and headache")).toEqual([
      "sore throat",
      "headache"
    ]);
  });

  test("should returns medical words if not 'and' exists", () => {
    expect(filterInput("I have a sore throat")).toEqual(["sore throat"]);
  });
});

describe("Check input words existence", () => {
  const inputWords = ["sore throat", "headache"];

  test("should matchInputWords function defined", () => {
    expect(compareWords).toBeDefined();
  });
  test("should word match", () => {
    expect(compareWords(inputWords, "sore throat")).toBeTruthy();

    expect(compareWords(inputWords, "headache")).toBeTruthy();
  });

  test("should return false if matching word includes other text", () => {
    expect(compareWords(inputWords, "sore throat symptom")).toBeFalsy();

    expect(compareWords(inputWords, "chronic sore throat")).toBeFalsy();

    expect(compareWords(inputWords, "frontal headache")).toBeFalsy();
  });
});

//write test for type-getter.js

const getTypeGetter = require("./type-getter.js");

test("Will return the correct types from the payload object", () => {
  const pl = {
    name: "Ahmad",
    age: 21,
    children: ["Zaatar", "Zaytoon"],
    nationality: "jordanian",
    skills: {
      coding: 4,
      boxing: 3,
      cooking: 1,
    },
  };

  const expectedOutput = {
    name: "string",
    age: "number",
    children: "string[]",
    nationality: "string",
    skills: {
      coding: "number",
      boxing: "number",
      cooking: "number",
    },
  };

  expect(getTypeGetter(pl)).toEqual(expectedOutput);
});

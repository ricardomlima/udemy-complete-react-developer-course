const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymouse") => `Hello ${name}`;

test("should add tow numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Greeting is correcct", () => {
  const greeting = generateGreeting("Ricardo");
  expect(greeting).toBe("Hello Ricardo");
});

test("Greeting is correcct withou parameter", () => {
  const greeting = generateGreeting();
  expect(greeting).toBe("Hello Anonymouse");
});

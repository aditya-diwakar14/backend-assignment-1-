// calculator.js
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

const args = process.argv.slice(2);

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

function calculate(op, a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: Please provide valid numbers";
  }

  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) return "Error: Cannot divide by zero";
      return a / b;
    default:
      return `Error: Invalid operation "${op}". Use add, subtract, multiply or divide`;
  }
}

if (!operation || args.length < 3) {
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Operations: add | subtract | multiply | divide");
} else {
  const result = calculate(operation, num1, num2);
  console.log("Result:", result);
}

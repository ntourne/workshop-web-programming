function getSumNumbers(num1, num2) {
  return num1 + num2;
}

function printDate() {
  console.log("Step 3 - Date is", new Date());
}

function execute() {
  console.log("Step 1");

  const sum = getSumNumbers(5, 10);
  console.log("Step 2 - sum is", sum);

  printDate();

  console.log("Step 4");
}

function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interest = parseFloat(document.getElementById("interest").value) / 100;
  const years = parseFloat(document.getElementById("years").value);
  const compounding = parseFloat(document.querySelector('input[name="compounding"]:checked').value);

  // Formula for compound interest
  const amount = principal * Math.pow(1 + interest / compounding, compounding * years);

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Future Amount: $${amount.toFixed(2)}`;
}

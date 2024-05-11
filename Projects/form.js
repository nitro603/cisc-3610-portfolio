const form = document.getElementById('compound-interest-form');
const calculateButton = document.getElementById('calculate-button');
const resetButton = document.getElementById('reset-button');
const resultsDiv = document.getElementById('results');
const monthlyPaymentCheckbox = document.getElementById('monthly-payment');

calculateButton.addEventListener('click', calculateCompoundInterest);
resetButton.addEventListener('click', resetForm);

function calculateCompoundInterest() {
  // Get user input values
  const principal = parseFloat(document.getElementById('principal').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
  const numYears = parseFloat(document.getElementById('num-years').value);
  const compoundFrequency = document.getElementById('compound-frequency').value;

  // Validate input (optional)
  if (principal <= 0 || interestRate < 0 || numYears <= 0) {
    alert('Please enter valid values for principal, interest rate, and number of years.');
    return;
  }

  // Determine compounding frequency multiplier
  let compoundingFrequencyMultiplier;
  switch (compoundFrequency) {
    case 'annual':
      compoundingFrequencyMultiplier = 1;
      break;
    case 'semi-annual':
      compoundingFrequencyMultiplier = 2;
      break;
    case 'quarterly':
      compoundingFrequencyMultiplier = 4;
      break;
    case 'monthly':
      compoundingFrequencyMultiplier = 12;
      break;
  }

  // Calculate based on presence of monthly payment checkbox
  let totalAmount;
  if (monthlyPaymentCheckbox.checked) {
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment-amount').value);
    totalAmount = calculateFutureValueWithPayments(principal, monthlyPayment, interestRate, numYears * compoundingFrequencyMultiplier);
  } else {
    totalAmount = principal * Math.pow(1 + interestRate / compoundingFrequencyMultiplier, compoundingFrequencyMultiplier * numYears);
  }

  // Format and display results
  resultsDiv.textContent = `After ${numYears} years at ${interestRate * 100}% interest compounded ${compoundFrequency}, your initial investment of $${principal.toFixed(2)} ${monthlyPaymentCheckbox.checked ? `with a monthly payment of $${monthlyPayment.toFixed(2)}` : ''} will grow to $${totalAmount.toFixed(2)}`;
}

function resetForm() {
  form.reset();
  resultsDiv.textContent = '';
  monthlyPaymentCheckbox.checked = false; // Reset checkbox state
  document.getElementById('monthly-payment-amount').value = ''; // Clear monthly payment input
}

function calculateFutureValueWithPayments(principal, payment, interestRate, numPeriods) {
  // Future value with monthly payments formula
  const interestPerPeriod = interestRate / compoundingFrequencyMultiplier;
  const onePlusInterest = 1 + interestPerPeriod;
  return principal * (onePlusInterest ** numPeriods - 1) / interestPerPeriod + payment * (onePlusInterest ** numPeriods - 1) / (onePlusInterest - 1);
}

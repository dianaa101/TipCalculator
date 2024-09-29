const amountInput = document.getElementById('amount');
const tipButtons = document.querySelectorAll('.tip-buttons button');
const customTipInput = document.getElementById('customTipButton');
const calculateButton = document.getElementById('calculateButton');
const resetButton = document.getElementById('resetButton');
const finalAmountDisplay = document.getElementById('finalAmount');
const resultDiv = document.getElementById('result');

let tipPercentage = 0;

function calculateTip() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let finalAmount = amount + (amount * tipPercentage / 100);
    finalAmount = finalAmount.toFixed(2); 
    finalAmountDisplay.textContent = `${finalAmount}`;
    resultDiv.style.display = 'block'; 
}

function handleTipButtonClick(event) {
    customTipInput.value = '';

    tipPercentage = parseInt(event.target.getAttribute('data-percent'));

    tipButtons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

customTipInput.addEventListener('input', function () {
    const customTip = parseFloat(customTipInput.value);
    if (!isNaN(customTip) && customTip >= 0) {
        tipPercentage = customTip;
        tipButtons.forEach(button => button.classList.remove('active'));
    }
});

tipButtons.forEach(button => {
    button.addEventListener('click', handleTipButtonClick);
});

calculateButton.addEventListener('click', calculateTip);

resetButton.addEventListener('click', function () {
    amountInput.value = '';
    customTipInput.value = '';
    finalAmountDisplay.textContent = '';
    tipPercentage = 0;

    tipButtons.forEach(button => button.classList.remove('active'));

    resultDiv.style.display = 'none';
});

resultDiv.style.display = 'none';

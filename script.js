let billAmount = document.getElementById("bill");
let numberOfPeople = document.getElementById("people"); 
const resetButton = document.getElementById("reset");
let tipPercentage = document.querySelectorAll('input[name="percentage"]');
let customChoice = document.getElementById("custom-choice");
let tipAmount = document.getElementById("result-tip");
let totalAmount = document.getElementById("result-total");

function calculateTip () {
    let bill = parseFloat(billAmount.value);
    let people = parseInt(numberOfPeople.value);
    
    let selectedTip = document.querySelector('input[name="percentage"]:checked');
    let tipValue = 0;

    if (selectedTip) {
        tipValue = parseFloat(selectedTip.value);
    } else if (customChoice.value !== "") {
        tipValue = parseFloat(customChoice.value);
    }
    
    if (isNaN(bill) || isNaN(people) || people <= 0 || isNaN(tipValue) || bill <= 0) {
        return;
    }

    let tipAmountPerPerson = (bill * tipValue) / 100 / people;
    let totalAmountPerPerson = (bill + (bill * tipValue) / 100) / people;

    tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
    totalAmountPerPerson = totalAmountPerPerson.toFixed(2);

    tipAmount.innerText = `${tipAmountPerPerson}`;
    totalAmount.innerText = `${totalAmountPerPerson}`;
}

    function resetFields() {
        billAmount.value = '';
        numberOfPeople.value = '';
        customChoice.value = '';
        
        document.querySelectorAll('input[name="percentage"]').forEach((radio) => {
            radio.checked = false;
        });
        
        
        tipAmount.innerText = '0.00';
        totalAmount.innerText = '0.00';
    }
    
    
    billAmount.addEventListener('input', calculateTip);
    numberOfPeople.addEventListener('input', calculateTip);
    tipPercentage.forEach((radio) => {
        radio.addEventListener('change', calculateTip);
    });
    customChoice.addEventListener('input', calculateTip);
    
    
    resetButton.addEventListener('click', resetFields);

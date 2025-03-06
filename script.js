let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("date").innerHTML = "Today is " + day;


//calculator
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });


 // BMI Calculator
function calculateBMI() {
   const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
   const weight = parseFloat(document.getElementById('weight').value);
 
   if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
     document.getElementById('Result').textContent = "Please enter valid values.";
     return;
   }
 
   const bmi = (weight / (height * height)).toFixed(2);
   let bmiCategory = "";
 
   if (bmi < 18.5) {
     bmiCategory = "Underweight";
   } else if (bmi >= 18.5 && bmi <= 24.9) {
     bmiCategory = "Normal weight";
   } else if (bmi >= 25 && bmi <= 29.9) {
     bmiCategory = "Overweight";
   } else {
     bmiCategory = "Obesity";
   }
 
   document.getElementById('Result').innerHTML = `
     Your BMI is: <strong>${bmi}</strong><br>
     Category: <strong>${bmiCategory}</strong>
   `;
 }
 
 // Currency Converter
 function convertCurrency() {
   const amount = parseFloat(document.getElementById('amount').value);
   const fromCurrency = document.getElementById('fromCurrency').value;
   const toCurrency = document.getElementById('toCurrency').value;
   const exchangeRates = {
     INR: { USD: 0.012, EUR: 0.011, INR: 1 },
     USD: { USD: 1, EUR: 0.85, INR: 86.65 },
     EUR: { USD: 1.18, EUR: 1, INR: 90.58 }
   };
   if (isNaN(amount)) {
     document.getElementById('Result1').textContent = "Please enter a valid amount.";
     return;
   }
   const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
   document.getElementById('Result1').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
 }
 
 // Weight Converter
 function convertWeight() {
   const weight = parseFloat(document.getElementById('weightInput').value);
   const fromUnit = document.getElementById('fromUnit').value;
   const toUnit = document.getElementById('toUnit').value;
   const conversionRates = {
     kg: { kg: 1, lbs: 2.20462 },
     lbs: { kg: 0.453592, lbs: 1 }
   };
   if (isNaN(weight)) {
     document.getElementById('Result2').textContent = "Please enter a valid weight.";
     return;
   }
   const convertedWeight = (weight * conversionRates[fromUnit][toUnit]).toFixed(2);
   document.getElementById('Result2').textContent = `${weight} ${fromUnit} = ${convertedWeight} ${toUnit}`;
 }
 
 // Size Calculation
 function calculateSize() {
   const length = parseFloat(document.getElementById('length').value);
   const width = parseFloat(document.getElementById('width').value);
   if (isNaN(length) || isNaN(width)) {
     document.getElementById('Result3').textContent = "Please enter valid values.";
     return;
   }
   const area = (length * width).toFixed(2);
   document.getElementById('Result3').textContent = `Area: ${area} cm²`;
 }
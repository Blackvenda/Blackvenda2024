const YourNameInput = document.getElementById('YourName');
const AddressInput = document.getElementById('Address');
const DistrictInput = document.getElementById('District'); 
const Mobile1Input = document.getElementById('Mobile1'); 
const orderIDElement = document.getElementById('Oeder-ID'); // Element to display custom reference
const paypalCover = document.querySelectorAll(".centered")[0];

function checkInputsx() {
  if (YourNameInput.value && AddressInput.value && DistrictInput.value && Mobile1Input.value) {
    paypalCover.style.display= 'none';
  } else {
    paypalCover.style.display= '';
  }
}

YourNameInput.addEventListener('input', checkInputsx);
AddressInput.addEventListener('input', checkInputsx);
DistrictInput.addEventListener('input', checkInputsx);
Mobile1Input.addEventListener('input', checkInputsx);

    // Disable the PayPal button when the form is not valid
    function updatePayPalButtonState() {
      const form = document.getElementById('myForm');
      const paypalButton = document.getElementById('paypal-button-container');
      const isValid = form.checkValidity();
      paypalButton.style.display = isValid ? 'block' : 'none';
    }

// Replace 'YOUR_API_KEY' with your actual API key from Open Exchange Rates
const apiKey = 'https://openexchangerates.org/api/currencies.json';

// Function to fetch real-time exchange rates and convert LKR to USD
async function convertLKRtoUSD(lkrAmount) {
  try {
    // Fetch the latest exchange rates
    const response = await fetch(`https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`);
    const data = await response.json();
    const exchangeRate = data.rates.LKR;

    return lkrAmount / exchangeRate;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
}

// Function to render PayPal button with the converted amount
async function renderPayPalButton() {
  const lkrAmount = parseFloat(document.getElementById('ItemFinalTotaleHere').innerText.split('LKR.')[1]);
  const usdAmount = await convertLKRtoUSD(lkrAmount);
  const scriptURL = 'https://script.google.com/macros/s/AKfycby4XI6bPZeaY0m_wcX0Xfm013FGE4c5zTxZeHdDokfZ68x4qz7N71w6YPTdQeUkwcy6/exec'
            const form = document.forms['google-sheet']

  if (usdAmount !== null) {
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: usdAmount.toFixed(2),
              currency_code: 'USD'
            },
			 invoice_id: orderIDElement.value
          }]
        });
      },
      onApprove: function(data, actions) { 
		document.getElementById('paymentOp').click();
		document.querySelectorAll(".onlineTrancex")[0].style.display= "block";
		document.querySelectorAll(".codFin")[0].style.display= "none";
		alert('Payment successful! Transaction');
      }
    }).render('#paypal-button-container');
  } else {
    // Handle the case where the currency conversion fails
    alert('Failed to fetch exchange rates. Please try again later.');
  }
}

// Wait for the DOM to be ready and then render the PayPal button
document.addEventListener('DOMContentLoaded', renderPayPalButton);

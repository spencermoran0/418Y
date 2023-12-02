// PaymentPage.jsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import '../CssStyle/Payment.css'; // Import your Payment styles

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isCardExpired, setIsCardExpired] = useState(false); // Added state for card expiration
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handleBillingAddressChange = (e) => {
    setBillingAddress(e.target.value);
  };

  // Function to check if expiration date is valid
  const isValidExpirationDate = (dateString) => {
    const today = new Date();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Ensure two-digit month
    const currentYear = today.getFullYear();
    const [month, year] = dateString.split('/').map((part) => parseInt(part, 10));
    const enteredYear = year < 100 ? 2000 + year : year; // Convert two-digit year to four-digit year

    // Check if the expiration date is later than the current date
    const isExpired =
      enteredYear < currentYear ||
      (enteredYear === currentYear && month < currentMonth);

    setIsCardExpired(isExpired); // Set the state for card expiration
    return !isExpired; // Return the result of the expiration check
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for demonstration purposes
    const isValidCardNumber = /^\d{16}$/.test(cardNumber); // Check if card number is 16 digits
    const isValidExpiryDate =
      /^\d{2}\/\d{2}$/.test(expiryDate) && isValidExpirationDate(expiryDate); // Check if expiry date is in MM/YY format and not expired
    const isValidCVV = /^\d{3}$/.test(cvv); // Check if CVV is 3 digits
    const isValidCardholderName = cardholderName.trim() !== ''; // Simple validation for cardholder name
    const isValidBillingAddress = billingAddress.trim() !== ''; // Simple validation for billing address

    const isValidPayment =
      isValidCardNumber &&
      isValidExpiryDate &&
      isValidCVV &&
      isValidCardholderName &&
      isValidBillingAddress;

    setIsValid(isValidPayment);

    if (isValidPayment) {
        // Simulate successful payment
        alert('Payment successful! (This is a simulation)');
        // Navigate back to the subscription page
        navigate('/Subscription');
      }
  };

  return (
    <div>
      <Navbar />
      <section className="payment-container"> {/* Use the correct class name */}
        <h1>Payment Information</h1>
        <p>Please enter your payment information below:</p>

        {/* Payment form (simulated) */}
        <form onSubmit={handleSubmit} className="container">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />

          <label htmlFor="expiryDate">Expiry Date(MM/YY):</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
          />

          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleCVVChange}
            required
          />

          <label htmlFor="cardholderName">Cardholder Name:</label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={cardholderName}
            onChange={handleCardholderNameChange}
            required
          />

          <label htmlFor="billingAddress">Billing Address:</label>
          <textarea
            id="billingAddress"
            name="billingAddress"
            value={billingAddress}
            onChange={handleBillingAddressChange}
            required
          />

          <button type="submit">Submit Payment</button>
        </form>

        {/* Display validation message */}
        {isValid ? null : (
          <p style={{ color: 'red' }}>
            Invalid payment information. Please check your details.
          </p>
        )}

        {/* Display card expiration message */}
        {isCardExpired && (
          <p style={{ color: 'red' }}>
            {`Card has expired. Please use a valid card. Expiry Date : ${expiryDate}, Current month: ${new Date().getMonth()}, Current year: ${new Date().getFullYear()}.`}
          </p>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default PaymentPage;

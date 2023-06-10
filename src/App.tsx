import React, { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import logo from './images/logo.jpg';
import './App.css';

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState('');
  const [paymentNum, setPaymentNum] = useState('');
  const [description, setDescription] = useState('');
  const [formUrl, setFormUrl] = useState('');

  const handlePaymentFormSubmit = (
    amount: string,
    paymentNum: string,
    description: string
  ) => {
    setAmount(amount);
    setPaymentNum(paymentNum);
    setDescription(description);
    setSubmitted(true);
    console.log(amount, paymentNum, description);


    // Make the API call to create the payment form
    fetch('https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pageCode: 'e19e0b687744',
        userId: '52e95954cd5c1311',
        sum: amount,
        paymentNum,
        description,
        pageField: {
          'שם מלא': 'Full Name',
          phone: 'Phone',
          email: 'Email',
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment form creation response:', data);
        if (data.formUrl) {
          setFormUrl(data.formUrl);
        } else {
          console.error('Failed to create payment form:', data);
        }
      })
      .catch(error => {
        console.error('Failed to create payment form:', error);
      });
  };

  // function handleCancel(): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />

      <PaymentForm onSubmit={handlePaymentFormSubmit} />

    </div>
  );
};

export default App;

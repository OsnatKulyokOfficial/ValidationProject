import React, { useState } from "react";
import "../style/PaymentForm.css";

const PaymentForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentNum, setPaymentNum] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(amount, paymentNum, description, fullName, phone, email);

      setFullName("");
      setPhone("");
      setEmail("");
      setPaymentNum("");
      setAmount("");
      setDescription("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFields = () => {
    const errors = {};

    if (fullName.trim() === "") {
      errors.fullName = "Full Name is required";
    } else if (/\d/.test(fullName)) {
      errors.fullName = "Name should not contain numbers";
    }

    if (phone.trim() === "") {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone should contain numbers only";
    } else if (phone.length < 9) {
      errors.phone = "Phone number should have at least 9 digits";
    } else if (phone.length > 10) {
      errors.phone = "Phone number should not exceed 10 digits";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (paymentNum.trim() === "") {
      errors.paymentNum = "Payment Number is required";
    }

    if (amount.trim() === "") {
      errors.amount = "Amount is required";
    } else if (!isValidAmount(amount)) {
      errors.amount = "Invalid amount";
    }

    if (description.trim() === "") {
      errors.description = "Description is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidAmount = (amount) => {
    // Validate amount as a positive number
    const number = parseFloat(amount);
    return !isNaN(number) && number >= 0;
  };

  return (
    <div className="container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="amount">Sum:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter Sum"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            required
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="payment-num">Payment Number:</label>
          <input
            type="number"
            id="payment-num"
            name="payment-num"
            placeholder="Enter Payment Number"
            value={paymentNum}
            onChange={(e) => setPaymentNum(e.target.value)}
            min="1"
            required
          />
          {errors.paymentNum && (
            <span className="error">{errors.paymentNum}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

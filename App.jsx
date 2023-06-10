import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import logo from "./images/logo.jpg";
import "./App.css";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentNum, setPaymentNum] = useState("");
  const [description, setDescription] = useState("");
  const [formUrl, setFormUrl] = useState("");

  const handlePaymentFormSubmit = (
    amount,
    paymentNum,
    description,
    fullName,
    phone,
    email
  ) => {
    console.log(amount, paymentNum, description);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("amount", amount);
    formData.append("paymentNum", paymentNum);
    formData.append("description", description);
    console.log(amount, paymentNum, description, fullName, phone, email);

    // Log the request payload
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });
    console.log("Request Payload:", payload);
    console.log("formdata:", formData);

    // Make the API call to create the payment form
    fetch(
      "https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Payment form creation response:", data);
        if (data.formUrl) {
          setFormUrl(data.formUrl);
        } else {
          console.error("Failed to create payment form:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to create payment form:", error);
      });

    setAmount(amount);
    setPaymentNum(paymentNum);
    setDescription(description);
    setSubmitted(true);
  }; // Closing brace for handlePaymentFormSubmit function

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <PaymentForm onSubmit={handlePaymentFormSubmit} />
    </div>
  );
};

export default App;

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
    setAmount(amount);
    setPaymentNum(paymentNum);
    setDescription(description);
    setSubmitted(true);
    console.log(amount, paymentNum, description);

    const formData = new FormData();
    formData.append("pageCode", "e19e0b687744");
    formData.append("userId", "52e95954cd5c1311");
    formData.append("sum", amount);
    formData.append("paymentNum", "2");
    formData.append("description", "56");
    formData.append("pageField[fullName]", "vjhd");
    formData.append("pageField[phone]", "16515");
    formData.append("pageField[email]", "example@example.");

    // Make the API call to create the payment form
    fetch(
      "https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
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
  };

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <PaymentForm onSubmit={handlePaymentFormSubmit} />
    </div>
  );
};

export default App;

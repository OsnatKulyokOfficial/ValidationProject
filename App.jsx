import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import logo from "./images/logo.jpg";
import "./App.css";

const App = () => {
  const [setFormUrl] = useState("");

  const handlePaymentFormSubmit = (
    amount,
    paymentNum,
    description,
    fullName,
    phone,
    email
  ) => {
    console.log(amount, paymentNum, description);

    // The variable add by the postman order
    const formData = new FormData();
    formData.append("pageCode", "e19e0b687744");
    formData.append("userId", "52e95954cd5c1311");
    formData.append("amount", amount);
    formData.append("paymentNum", paymentNum);
    formData.append("description", description);
    formData.append("fullName", fullName);
    formData.append("phone", phone);
    formData.append("email", email);

    console.log(amount, paymentNum, description, fullName, phone, email);
    console.log("FormData at the very begining", FormData);

    // Log the request payload
    formData.forEach((value, key) => {
      formData[key] = value;
    });
    console.log("formdata:", formData);

    // Make the API call to create the payment form
    fetch(
      "https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
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
  }; // Closing brace for handlePaymentFormSubmit function

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <PaymentForm onSubmit={handlePaymentFormSubmit} />
    </div>
  );
};

export default App;

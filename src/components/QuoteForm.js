import React, { useState } from "react";

function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    companyWebsite: "",
    message: "",
    trucking: false,
    freightQuote: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or save to backend)
    alert("Quote request submitted!");
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <h2>Request a Quote</h2>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="trucking"
            checked={formData.trucking}
            onChange={handleCheckboxChange}
          />
          Trucking & Transportation
        </label>
        <label>
          <input
            type="checkbox"
            name="freightQuote"
            checked={formData.freightQuote}
            onChange={handleCheckboxChange}
          />
          Freight Quote
        </label>
      </div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="companyWebsite"
        placeholder="Company Website"
        value={formData.companyWebsite}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Quote Request</button>
    </form>
  );
}

export default QuoteForm;

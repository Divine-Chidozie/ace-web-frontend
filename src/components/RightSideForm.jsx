import "./RightSideForm.css";
import React, { useState } from "react";

const RightSideForm = ({ selectedPackage, category }) => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactBody: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // alert(`Thank you ${formData.contactName}, your message has been sent!`);
    // setFormData({ contactName: "", contactEmail: "", contactBody: "" });
  };

  return (
    <form
      className="ContactForm"
      onSubmit={handleSubmit}
      method="POST"
      action="/contact-us"
    >
      <h3>
        Send Message {selectedPackage && `(for ${selectedPackage.title})`}
      </h3>
      <input
        type="text"
        name="contactName"
        placeholder="Full Name"
        value={formData.contactName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="contactEmail"
        placeholder="Email"
        value={formData.contactEmail}
        onChange={handleChange}
        required
      />
      <textarea
        name="contactBody"
        placeholder="Any additional message..."
        value={formData.contactBody}
        onChange={handleChange}
      ></textarea>

      {/* Hidden field to pass package info */}
      {selectedPackage && (
        <input
          type="hidden"
          name="contactSelect"
          value={`${selectedPackage.title} | ${category}` }
        />
      )}

      <button type="submit">Send</button>
    </form>
  );
};

export default RightSideForm;

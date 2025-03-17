"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to submit the form
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // For Netlify forms
      formDataToSend.append("form-name", "contact");

      // Submit the form data
      const response = await fetch("/", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setIsSubmitted(true);

        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Form submission failed");
        // You could add error handling here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You could add error handling here
    }
  };

  if (isSubmitted) {
    return (
      <div className="">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="text-h3 font-bold text-primary">Thank You!</h3>

          <p className="text-lg">
            Your message has been received. We appreciate you reaching out and
            will get back to you shortly.
          </p>

          <button
            onClick={() => setIsSubmitted(false)}
            className="button mx-auto mt-4"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hidden form for Netlify form detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <form
        className="space-y-12"
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              className="rounded-lg border border-gray-300 p-2"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="rounded-lg border border-gray-300 p-2"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg border border-gray-300 p-2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            className="rounded-lg border border-gray-300 p-2"
            id="message"
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="button"
          type="submit"
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.message
          }
        >
          Submit
        </button>
      </form>
    </>
  );
}

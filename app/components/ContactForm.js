"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using the recommended Netlify Forms approach for Next.js
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
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
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm">
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
      <form
        className="space-y-12"
        onSubmit={handleSubmit}
        name="contact"
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human:{" "}
            <input name="bot-field" />
          </label>
        </p>

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
          className="button flex items-center justify-center"
          type="submit"
          disabled={
            isSubmitting ||
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.message
          }
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
}

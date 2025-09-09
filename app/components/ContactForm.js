"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a9c5689f-d4b3-4ab4-8789-38e63028536b", // Get your access key from web3forms.com
          first_name: formData.get("first-name"),
          last_name: formData.get("last-name"),
          email: formData.get("email"),
          message: formData.get("message"),
          subject: "New contact form submission from The Expert's Voice",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {isSubmitted ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">
            Thank you for contacting us!
          </h3>
          <p>We will get back to you as soon as possible.</p>
          <button
            className="button mx-auto mt-8"
            onClick={() => setIsSubmitted(false)}
          >
            Submit another message
          </button>
        </div>
      ) : (
        <form className="space-y-12" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="first-name">First Name</label>
              <input
                className="rounded-lg border border-gray-300 p-2"
                type="text"
                id="first-name"
                name="first-name"
                required
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="last-name">Last Name</label>
              <input
                className="rounded-lg border border-gray-300 p-2"
                type="text"
                id="last-name"
                name="last-name"
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
              required
            />
          </div>

          <div className="mb-6 flex items-start">
            <input type="checkbox" id="sms-consent" name="sms" className="mt-1 h-5 min-w-5 text-primary rounded-md border-gray-300 focus:ring-primary transition-colors duration-200 ease-in-out" required ></input>
            <label htmlFor="sms-consent" className="ml-3 text-gray-600 cursor-pointer select-none">
                <span className="font-medium block">I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from The Expert&apos;s Voice Podcast. Message frequency varies. Message & data rates may apply. Text HELP to (570) 438-9807 for assistance. You can reply STOP to unsubscribe at any time.</span>
            </label>
          </div>

          <div className="mb-6 flex items-start">
            <input type="checkbox" id="promotions-consent" name="promotions" className="h-5 min-w-5 text-primary rounded-md border-gray-300 focus:ring-primary transition-colors duration-200 ease-in-out"></input>
            <label htmlFor="promotions-consent" className="ml-3 text-gray-600 cursor-pointer select-none">
                <span className="font-medium block">I want to receive news, feature updates, discounts, and offers from The Expert&apos;s Voice Podcast</span>
            </label>
          </div>

          {/* Honeypot field to prevent spam */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </>
  );
}

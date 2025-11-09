'use client';

import React from "react";
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useState, ChangeEvent, FormEvent } from "react";

export default function FormContact() {
    const { ref, inView } = useInView({
      triggerOnce: true, // Τρέχει το animation μόνο μία φορά
      threshold: 0.1,    // Ενεργοποιείται όταν το 10% του στοιχείου είναι ορατό
    });

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
      info: { error: false, msg: "" },
    }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message },
        });
        // Καθαρισμός της φόρμας μετά την επιτυχή αποστολή
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Κάτι πήγε στραβά.");
      }
    } catch (error) {
      let errorMessage =
        "Προέκυψε ένα μη αναμενόμενο σφάλμα. Παρακαλώ δοκιμάστε ξανά.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: errorMessage },
      });
    }
  };

  return (
    <div ref={ref} className={`w-full transition-opacity duration-1000 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Free Consultation</h2>
          <p className="text-gray-600">We would love to hear from you! We are at your disposal to solve any question you have or to discuss any clarification!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 mb-2" // Adjusted label styling
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="given-name" // More specific autocomplete
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5D9DCD] focus:border-transparent text-black placeholder-gray-400" // Added shadow-sm and placeholder style
              />
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-semibold text-gray-800 mb-2" // Adjusted label styling
              >
                Last
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                autoComplete="family-name" // More specific autocomplete
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5D9DCD] focus:border-transparent text-black placeholder-gray-400" // Added shadow-sm and placeholder style
              />
            </div>
          </div>

          <div className="mb-6"> {/* Simplified this div, removed redundant grid */}
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 mb-2" // Adjusted label styling
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5D9DCD] focus:border-transparent text-black placeholder-gray-400" // Added shadow-sm and placeholder style
              />
            </div>
          </div>


          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
                className="block text-sm font-semibold text-gray-800 mb-2" // Adjusted label styling
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5D9DCD] focus:border-transparent text-black placeholder-gray-400" // Added shadow-sm and placeholder style
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full px-6 py-3 font-semibold text-white bg-[#094875] rounded-md hover:bg-[#0991F3] focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-1/4 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 ease-in-out hover:shadow-lg" // Added transition and hover:shadow-lg
            >
              {status.submitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
        {status.info.msg && (
          <div
            className={`mt-6 flex items-center justify-center p-4 rounded-md text-sm font-medium ${
              status.info.error
                ? "bg-red-50 text-red-800"
                : "bg-green-50 text-green-800"
            }`}
          >
            {status.info.error ? (
              <XCircleIcon className="h-5 w-5 mr-2" />
            ) : (
              <CheckCircleIcon className="h-5 w-5 mr-2" />
            )}
            <span>{status.info.msg}</span>
          </div>
        )}
      </div>
    </div>
  );
}

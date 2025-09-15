import React, { useState, useRef, useEffect } from "react";

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const submitButtonRef = useRef(null);

  // Focus management
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = formRef.current.querySelector(
        '[aria-invalid="true"]'
      );
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("submitting");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    // Close modal on Escape key
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="px-xl py-2xl bg-teal text-white relative">
      <h2 id="modal-heading" className="text-center">
        Contact me.
      </h2>
      <p id="modal-description" className="sr-only">
        Fill out the form below to send me a message. All fields are required.
      </p>

      {submitStatus === "success" && (
        <div
          className="success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
          role="alert"
          aria-live="polite"
        >
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div
          className="error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
          aria-live="polite"
        >
          <p>
            Sorry, there was an error sending your message. Please try again.
          </p>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        aria-describedby={submitStatus === "error" ? "form-error" : undefined}
        className="flex flex-col gap-sm w-[720px]"
      >
        <div className="grid grid-cols-2 gap-sm">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-rubik uppercase text-sm">
              Name{" "}
              <span className="text-white" aria-label="required">
                *
              </span>
            </label>
            <input
              ref={nameInputRef}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`px-2xs py-2xs bg-white text-black font-rubik text-sm w-full rounded-[5px] border-none focus:border-2 focus:border-orange focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
              disabled={isSubmitting}
              autoComplete="name"
            />
            {errors.name && (
              <div
                id="name-error"
                className="text-red-200 text-sm mt-1 italic"
                role="alert"
                aria-live="polite"
              >
                {errors.name}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-rubik uppercase text-sm">
              Phone number{" "}
              <span className="text-white" aria-label="required">
                *
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`px-2xs py-2xs bg-white text-black font-rubik text-sm w-full rounded-[5px] border-none focus:border-2 focus:border-orange focus:outline-none ${
                errors.phone ? "border-red-500" : ""
              }`}
              disabled={isSubmitting}
              autoComplete="tel"
            />
            {errors.phone && (
              <div
                id="phone-error"
                className="text-red-200 text-sm mt-1 italic"
                role="alert"
                aria-live="polite"
              >
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-rubik uppercase text-sm">
            Email{" "}
            <span className="text-white" aria-label="required">
              *
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`px-2xs py-2xs bg-white text-black font-rubik text-sm w-full rounded-[5px] border-none focus:border-2 focus:border-orange focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            disabled={isSubmitting}
            autoComplete="email"
          />
          {errors.email && (
            <div
              id="email-error"
              className="text-red-200 text-sm mt-1 italic"
              role="alert"
              aria-live="polite"
            >
              {errors.email}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-rubik uppercase text-sm">
            Message{" "}
            <span className="text-white" aria-label="required">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`px-2xs py-2xs bg-white text-black font-rubik text-sm w-full rounded-[5px] border-none focus:border-2 focus:border-orange focus:outline-none resize-y ${
              errors.message ? "border-red-500" : ""
            }`}
            disabled={isSubmitting}
            autoComplete="off"
          />
          {errors.message && (
            <div
              id="message-error"
              className="text-red-200 text-sm mt-1 italic"
              role="alert"
              aria-live="polite"
            >
              {errors.message}
            </div>
          )}
        </div>

        <button
          ref={submitButtonRef}
          className="mt-xs ml-auto border-1 border-white text-white text-sm px-2xs py-2xs rounded-[5px] focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
          aria-describedby={isSubmitting ? "submitting-status" : undefined}
        >
          {isSubmitting ? "Sending..." : "Send me a message"}
        </button>

        {isSubmitting && (
          <div id="submitting-status" className="sr-only" aria-live="polite">
            Submitting your message...
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;

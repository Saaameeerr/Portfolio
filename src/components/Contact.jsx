import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ✅ Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // handle form submit with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          "service_hxvj6hm",
          "template_i00x6kf", 
          formData,
          "Sxq_LLGklREt5LlLE" 
        )
        .then(
          (result) => {
            console.log("Email sent ✅", result.text);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("Email error ❌", error.text);
          }
        );
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 max-w-3xl mx-auto text-center pb-10"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <form className="grid gap-4 text-left" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <Button type="submit">Send Message</Button>
      </form>

      {submitted && (
        <p className="text-green-500 font-medium mt-4">
          ✅ Thank you! Your message has been sent.
        </p>
      )}

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-3xl pt-6">
        <a
          href="https://github.com/Saaameeerr"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sameer-khan-204078333/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/saaameeerr/?next=%2F&hl=en"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

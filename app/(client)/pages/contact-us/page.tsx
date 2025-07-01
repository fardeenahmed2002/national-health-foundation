"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const ContactPage = () => {

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add form submission logic (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className="bg-[#111926] min-h-screen flex items-center justify-center px-6 py-24 text-white" >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-[#0E1724] rounded-lg shadow-lg p-10 border-2 border-[#BB71FF]">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-4 border-[#BB71FF] pb-4">
          Contact Us
        </h1>

        {submitted ? (
          <p className="text-green-400 text-center text-lg">
            Thank you for reaching out! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block mb-2 text-gray-300 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-md bg-[#111926] border border-[#BB71FF] px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB71FF] focus:border-transparent text-white"
                />
              </div>

              <div className="w-full md:w-1/2">
                <label htmlFor="email" className="block mb-2 text-gray-300 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-md bg-[#111926] border border-[#BB71FF] px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB71FF] focus:border-transparent text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-gray-300 font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Brief subject"
                className="w-full rounded-md bg-[#111926] border border-[#BB71FF] px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB71FF] focus:border-transparent text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-300 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full rounded-md bg-[#111926] border border-[#BB71FF] px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB71FF] focus:border-transparent text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#BB71FF] text-[#111926] font-semibold py-3 rounded-md hover:bg-[#9a56d6] transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default ContactPage;

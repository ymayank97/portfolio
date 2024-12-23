import React, { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#1D1D1F] mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg bg-[#F5F5F7] border-0 text-[#1D1D1F] shadow-sm ring-1 ring-inset ring-[#86868B]/20 placeholder:text-[#86868B] focus:ring-2 focus:ring-inset focus:ring-[#0071E3] text-sm px-3 py-2"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#1D1D1F] mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg bg-[#F5F5F7] border-0 text-[#1D1D1F] shadow-sm ring-1 ring-inset ring-[#86868B]/20 placeholder:text-[#86868B] focus:ring-2 focus:ring-inset focus:ring-[#0071E3] text-sm px-3 py-2"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#1D1D1F] mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-lg bg-[#F5F5F7] border-0 text-[#1D1D1F] shadow-sm ring-1 ring-inset ring-[#86868B]/20 placeholder:text-[#86868B] focus:ring-2 focus:ring-inset focus:ring-[#0071E3] text-sm px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center items-center px-5 py-2.5 bg-[#0071E3] text-white rounded-lg hover:bg-[#0077ED] transition-colors text-sm font-medium"
      >
        Send Message
        <Send className="ml-2 w-4 h-4" />
      </button>
    </form>
  );
}

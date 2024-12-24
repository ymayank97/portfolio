import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <footer
      id="contact"
      className="py-8 bg-gradient-to-r from-[#0071E3] to-[#40A9FF] text-white p-0 m-0"
      style={{ marginTop: "0px" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-3">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-white mx-auto"></div>
        </div>
        <div>
          <div>
            <ContactForm />
          </div>
        </div>

        <div className="text-right mt-2">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Mayank Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

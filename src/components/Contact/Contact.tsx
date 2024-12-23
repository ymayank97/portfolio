import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#FBFBFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1D1D1F] mb-3">
            Get In Touch
          </h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#1D1D1F] mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-[#1D1D1F]">
                <Mail className="w-4 h-4 mr-3 text-[#0071E3]" />
                <span className="text-sm">contact@example.com</span>
              </div>
              <div className="flex items-center text-[#1D1D1F]">
                <Phone className="w-4 h-4 mr-3 text-[#0071E3]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-[#1D1D1F]">
                <MapPin className="w-4 h-4 mr-3 text-[#0071E3]" />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

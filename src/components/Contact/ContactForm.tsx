import React from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="text-center p-0 m-0 space-y-4 max-w-md mx-auto">
      <button
        onClick={() => {
          const email = "mayankyadavinus@gmail.com";
          if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
              alert("Email copied to clipboard!");
            });
          } else {
            window.location.href = `mailto:${email}`;
          }
        }}
        className="inline-flex items-center px-6 py-3 bg-white text-[#0071E3] rounded-full hover:bg-[#f0f0f0] transition-colors text-sm font-medium shadow-lg transform transition-transform hover:scale-105"
      >
        Send Email
        <Send className="ml-2 w-4 h-4" />
      </button>
      <p></p>
    </div>
  );
}

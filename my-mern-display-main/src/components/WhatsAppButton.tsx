import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string; // Example: "923001234567"
  message?: string; // Optional default message
  position?: "left" | "right"; // Position on screen
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello! I’d like to know more about your services.",
  position = "right",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 ${
        position === "right" ? "right-5" : "left-5"
      } bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 flex items-center justify-center`}
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;

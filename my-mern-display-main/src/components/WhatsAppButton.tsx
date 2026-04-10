import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: "left" | "right";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello! I'd like to know more about your services.",
  position = "right",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: "#25D366" }}
      className={`
        fixed bottom-5 ${position === "right" ? "right-5" : "left-5"}
        group flex items-center justify-end
        rounded-full shadow-lg
        overflow-hidden cursor-pointer
        transition-all duration-300 ease-in-out
        w-14 hover:w-44 h-14
      `}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "#128C7E";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "#25D366";
      }}
    >
      <span
        className="
          text-white text-sm font-medium whitespace-nowrap pl-3
          opacity-0 -translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 delay-100
        "
      >
        WhatsApp
      </span>

      <span className="flex items-center justify-center w-14 h-14 shrink-0">
        <FaWhatsapp size={28} color="white" />
      </span>
    </a>
  );
};

export default WhatsAppButton;

"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyBooking() {
  return (
    <div className="w-full">
      <InlineWidget
        url="https://calendly.com/mubilal349"
        styles={{
          height: "700px",
        }}
      />
    </div>
  );
}

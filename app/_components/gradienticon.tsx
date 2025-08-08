// Example React Component
import React from "react";

const GradientIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="lucide"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--primary-color)" />
        <stop offset="100%" stopColor="var(--secondary-color)" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 22h20L12 2z" stroke="url(#gradient)" />
  </svg>
);

export default GradientIcon;

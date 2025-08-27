"use client";

import { Menu, Search } from "lucide-react";

import Image from "next/image";
import logo from "../../public/logo.webp";
import { useState } from "react";

const Header: React.FC = () => {
  // Dropdown open state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Extract the image name dynamically
  const imageName = logo.src.split("/").pop()?.split(".")[0] || "Image";
  const altText = imageName.replace(/-/g, " ").replace(/_/g, " "); // Format the name

  return (
    <header className="flex flex-wrap justify-between items-center p-4 relative">
      <div className="logo-container w-[100px]">
      <Image src={logo} alt={altText}></Image>
      </div>
      <div className="menu-items flex flex-wrap gap-4">
      <svg width="0" height="0">
        <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="100%" stopColor="#6C30FF" />
        </linearGradient>
        </defs>
      </svg>
      <Search style={{ stroke: "url(#gradient)" }} strokeWidth={3} />
      <Menu
        strokeWidth={3}
        onClick={() => setDropdownOpen((open) => !open)}
        aria-label="Toggle menu"
        type="button"
      />
      </div>

      {/* Dropdown */}
      <style jsx>{`
      .dropdown-animate {
        animation: dropdownIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .dropdown-exit {
        animation: dropdownOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      @keyframes dropdownIn {
        from {
        opacity: 0;
        transform: scale(0.95);
        }
        to {
        opacity: 1;
        transform: scale(1);
        }
      }
      @keyframes dropdownOut {
        from {
        opacity: 1;
        transform: scale(1);
        }
        to {
        opacity: 0;
        transform: scale(0.95);
        }
      }
      `}</style>
      {dropdownOpen && (
      <div
        className="dropdown fixed inset-0 bg-black/70 z-[100] flex items-center justify-center"
      >
        <div className="dropdown-content bg-white flex flex-col gap-8 p-8 w-full max-w-md items-center dropdown-animate rounded-2xl shadow-2xl">
        <button
          className="self-end mb-4 text-3xl transition-all duration-1000 hover:rotate-90 hover:scale-130"
          onClick={() => setDropdownOpen(false)}
          aria-label="Close menu"
          type="button"
        >
          ✕
        </button>
        <div className="dropdown-item text-center text-2xl font-bold">Item 1</div>
        <div className="dropdown-item text-center text-2xl font-bold">Item 2</div>
        <div className="dropdown-item text-center text-2xl font-bold">Item 3</div>
        </div>
      </div>
      )}
      </header>
  );
};

export default Header;

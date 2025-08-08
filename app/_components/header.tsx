import React from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import { Search, Menu } from "lucide-react";
const Header: React.FC = () => {
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
        <Menu strokeWidth={3} />
      </div>
      <div className="dropdown absolute w-screen h-screen top-0 left-0 bg-white opacity-0 pointer-events-none z-100 bg-dark-bg">
        <div className="dropdown-content flex flex-col gap-4 p-4">
          <div className="dropdown-item">Item 1</div>
          <div className="dropdown-item">Item 2</div>
          <div className="dropdown-item">Item 3</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

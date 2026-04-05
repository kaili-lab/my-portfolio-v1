"use client";
import { useState, useEffect } from "react";
import MobileMenu from "../components/mobile-menu";
import WebMenu from "../components/web-menu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <MobileMenu /> : <WebMenu />;
};

export default Header;

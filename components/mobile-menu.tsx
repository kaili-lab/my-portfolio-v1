"use client";
import { useState } from "react";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 border-b border-border/20">
      <Link
        href="/"
        className="font-semibold text-lg text-foreground"
      >
        Kai Li
      </Link>

      <div className="flex items-center gap-3">
        <ModeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-foreground/60"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-14 bg-background z-40 p-6">
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-foreground/70 py-2">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-foreground/70 py-2">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MobileMenu;

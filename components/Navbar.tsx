"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Section } from "@/app/page";

const links: { label: string; id: Section }[] = [
  { label: "Hakkımda", id: "hakkimda" },
  { label: "Yetenekler", id: "yetenekler" },
  { label: "Projeler", id: "projeler" },
  { label: "Blog", id: "blog" },
  { label: "İletişim", id: "iletisim" },
];

interface Props {
  active: Section;
  onNav: (s: Section) => void;
}

export default function Navbar({ active, onNav }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: Section) => {
    onNav(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

          <button
            onClick={() => handleNav("hero")}
            className="text-[#F5F5F5] font-bold text-xl tracking-tight hover:text-[#6C63FF] transition-colors"
          >
            MD
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-[#6C63FF] bg-[#6C63FF]/10"
                    : "text-[#888888] hover:text-[#F5F5F5] hover:bg-[#ffffff08]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNav("iletisim")}
            className="hidden md:flex items-center px-4 py-2 rounded-lg bg-[#6C63FF] text-white text-sm font-medium hover:bg-[#5B54E8] transition-colors"
          >
            İletişime Geç
          </button>

          <button
            className="md:hidden text-[#F5F5F5] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-4 right-4 text-[#F5F5F5] p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-2xl font-medium transition-colors ${
                active === link.id ? "text-[#6C63FF]" : "text-[#F5F5F5]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("iletisim")}
            className="mt-4 px-8 py-3 rounded-lg bg-[#6C63FF] text-white text-lg font-medium hover:bg-[#5B54E8] transition-colors"
          >
            İletişime Geç
          </button>
        </div>
      )}
    </>
  );
}

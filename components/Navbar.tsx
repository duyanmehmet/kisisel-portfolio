"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Section } from "@/app/page";

const links: { label: string; id: Section }[] = [
  { label: "Hakkımda",  id: "hakkimda"  },
  { label: "Yetenekler", id: "yetenekler" },
  { label: "Projeler",  id: "projeler"  },
  { label: "Blog",      id: "blog"      },
  { label: "İletişim",  id: "iletisim"  },
];

interface Props { active: Section; onNav: (s: Section) => void; }

export default function Navbar({ active, onNav }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: Section) => { onNav(id); setOpen(false); window.scrollTo({ top: 0 }); };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-[1100px] mx-auto px-6 h-20 flex items-center justify-between">

          <button onClick={() => go("hero")}
            className="text-white font-extrabold text-2xl tracking-tight hover:text-[#6C63FF] transition-colors">
            MD
          </button>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`px-5 py-2.5 rounded-xl text-lg font-semibold transition-all ${
                  active === l.id
                    ? "text-[#6C63FF] bg-[#6C63FF]/10"
                    : "text-[#C0C0C0] hover:text-white hover:bg-white/5"
                }`}>
                {l.label}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobil menü */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10">
          <button className="absolute top-5 right-5 text-white" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              className={`text-4xl font-bold transition-colors ${
                active === l.id ? "text-[#6C63FF]" : "text-white hover:text-[#6C63FF]"
              }`}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

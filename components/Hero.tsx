"use client";

import { useEffect, useState } from "react";
import type { Section } from "@/app/page";

const roles = ["Backend Developer", "API Specialist", "Web Uygulama Geliştirici"];

interface Props {
  onNav: (s: Section) => void;
}

export default function Hero({ onNav }: Props) {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(108,99,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl w-full mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2A2A] text-[#888888] text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Freelance & iş tekliflerine açık
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-[#F5F5F5] leading-none tracking-tight">
            Mehmet <span className="text-[#6C63FF]">Duyan</span>
          </h1>

          <div className="flex items-center justify-center gap-2 h-9">
            <span className="text-[#888888] text-xl md:text-2xl font-mono">
              {mounted ? displayed : ""}
            </span>
            <span className="w-0.5 h-7 bg-[#6C63FF] animate-pulse inline-block" />
          </div>
        </div>

        <p className="text-[#888888] text-lg leading-relaxed max-w-lg mx-auto">
          Python ve Node.js ile ölçeklenebilir backend sistemleri ve API altyapıları geliştiriyorum.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNav("projeler")}
            className="px-7 py-3 rounded-lg bg-[#6C63FF] text-white font-medium hover:bg-[#5B54E8] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Projelerimi Gör
          </button>
          <button
            onClick={() => onNav("iletisim")}
            className="px-7 py-3 rounded-lg border border-[#2A2A2A] text-[#F5F5F5] font-medium hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            İletişime Geç
          </button>
        </div>

        <div className="flex items-center justify-center gap-5 pt-2">
          <a href="https://github.com/duyanmehmet" target="_blank" rel="noopener noreferrer"
            className="text-[#555] hover:text-[#F5F5F5] transition-colors text-sm">GitHub</a>
          <span className="text-[#2A2A2A]">·</span>
          <a href="https://www.linkedin.com/in/mehmet-duyan-746192336/" target="_blank" rel="noopener noreferrer"
            className="text-[#555] hover:text-[#F5F5F5] transition-colors text-sm">LinkedIn</a>
          <span className="text-[#2A2A2A]">·</span>
          <a href="https://www.instagram.com/mehmet__duyan/" target="_blank" rel="noopener noreferrer"
            className="text-[#555] hover:text-[#F5F5F5] transition-colors text-sm">Instagram</a>
        </div>
      </div>
    </section>
  );
}

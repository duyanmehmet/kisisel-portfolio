"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export type Section = "hero" | "hakkimda" | "yetenekler" | "projeler" | "blog" | "iletisim";

export default function Home() {
  const [active, setActive] = useState<Section>("hero");

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Navbar active={active} onNav={setActive} />

      <main className="flex-1">
        {active === "hero" && <Hero onNav={setActive} />}
        {active === "hakkimda" && <About />}
        {active === "yetenekler" && <Skills />}
        {active === "projeler" && <Projects />}
        {active === "blog" && <Blog />}
        {active === "iletisim" && <Contact />}
      </main>

      <Footer onNav={setActive} />
    </div>
  );
}

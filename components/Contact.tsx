"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const contactLinks = [
  { icon: Mail, label: "E-posta", value: "duyanmehmet183@gmail.com", href: "mailto:duyanmehmet183@gmail.com" },
  { icon: GithubIcon, label: "GitHub", value: "github.com/duyanmehmet", href: "https://github.com/duyanmehmet" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/mehmet-duyan", href: "https://www.linkedin.com/in/mehmet-duyan-746192336/" },
  { icon: InstagramIcon, label: "Instagram", value: "@mehmet__duyan", href: "https://www.instagram.com/mehmet__duyan/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-16">
      <div className="max-w-[900px] mx-auto w-full">

        <div className="mb-10">
          <p className="text-[#6C63FF] text-sm font-mono uppercase tracking-widest mb-2">İletişim</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">Benimle Çalış</h2>
          <p className="mt-3 text-[#888888]">Proje fikrin mi var? Mesaj bırak, en kısa sürede döneyim.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-3">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#2A2A2A] bg-[#111111] hover:border-[#6C63FF]/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#6C63FF]" />
                </div>
                <div>
                  <p className="text-[#555] text-xs">{label}</p>
                  <p className="text-[#F5F5F5] text-sm font-medium group-hover:text-[#6C63FF] transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle size={44} className="text-green-500" />
                <p className="text-[#F5F5F5] font-semibold">Mesajınız alındı!</p>
                <p className="text-[#888888] text-sm">En kısa sürede dönüş yapacağım.</p>
                <button onClick={() => setStatus("idle")} className="text-[#6C63FF] text-sm hover:underline">
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "İsim", type: "text", placeholder: "Adınız Soyadınız" },
                  { id: "email", label: "E-posta", type: "email", placeholder: "ornek@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[#888888] text-sm mb-1.5">{field.label} *</label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      value={form[field.id as "name" | "email"]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F5F5] text-sm placeholder:text-[#444] focus:outline-none focus:border-[#6C63FF] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-[#888888] text-sm mb-1.5">Mesaj *</label>
                  <textarea
                    id="message" name="message" required rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Projenizden veya iş teklifinizden bahsedin..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F5F5] text-sm placeholder:text-[#444] focus:outline-none focus:border-[#6C63FF] transition-colors resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Hata oluştu. Doğrudan e-posta ile ulaşın.</p>
                )}
                <button
                  type="submit" disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#6C63FF] text-white font-medium text-sm hover:bg-[#5B54E8] transition-colors disabled:opacity-60"
                >
                  <Send size={15} />
                  {status === "sending" ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

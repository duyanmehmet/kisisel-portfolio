"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

function GithubIcon()    { return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>; }
function LinkedinIcon()  { return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
function InstagramIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>; }
function PhoneIcon()     { return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>; }

const links = [
  { icon: Mail,          label: "E-posta",   value: "duyanmehmet183@gmail.com",     href: "mailto:duyanmehmet183@gmail.com" },
  { icon: PhoneIcon,     label: "Telefon",   value: "0546 181 11 74",               href: "tel:+905461811174" },
  { icon: GithubIcon,    label: "GitHub",    value: "github.com/duyanmehmet",       href: "https://github.com/duyanmehmet" },
  { icon: LinkedinIcon,  label: "LinkedIn",  value: "linkedin.com/in/mehmet-duyan", href: "https://www.linkedin.com/in/mehmet-duyan-746192336/" },
  { icon: InstagramIcon, label: "Instagram", value: "@mehmet__duyan",               href: "https://www.instagram.com/mehmet__duyan/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("https://formspree.io/f/mkoyoybn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      r.ok ? (setStatus("sent"), setForm({ name: "", email: "", message: "" })) : setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section style={{ padding: "24px 16px", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
      <p style={{ color: "#6C63FF", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>İletişim</p>
      <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 6vw, 3.5rem)", fontWeight: 900, marginBottom: "8px" }}>Benimle Çalış</h2>
      <p style={{ color: "#C0C0C0", fontSize: "clamp(0.85rem, 3.5vw, 1rem)", marginBottom: "24px", wordBreak: "break-word" }}>Proje fikrin mi var? Hemen yaz, en kısa sürede döneyim.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))", gap: "24px" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {links.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href}
              target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "12px", border: "1px solid #222", background: "#111", textDecoration: "none", overflow: "hidden" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={16} color="#6C63FF" />
              </div>
              <div style={{ overflow: "hidden", minWidth: 0 }}>
                <p style={{ color: "#888", fontSize: "11px", marginBottom: "2px" }}>{label}</p>
                <p style={{ color: "white", fontWeight: 600, fontSize: "13px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ background: "#111", border: "1px solid #222", borderRadius: "16px", padding: "16px" }}>
          {status === "sent" ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 0", textAlign: "center", gap: "12px" }}>
              <CheckCircle size={44} color="#4ade80" />
              <p style={{ color: "white", fontWeight: 800, fontSize: "18px" }}>Mesajınız alındı!</p>
              <button onClick={() => setStatus("idle")} style={{ color: "#6C63FF", fontSize: "14px", background: "none", border: "none", cursor: "pointer" }}>Yeni mesaj gönder</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { id: "name",  label: "Ad Soyad", type: "text",  ph: "Adınız Soyadınız" },
                { id: "email", label: "E-posta",   type: "email", ph: "ornek@email.com"  },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: "block", color: "#C0C0C0", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}>{f.label} *</label>
                  <input id={f.id} name={f.id} type={f.type} required
                    value={form[f.id as "name" | "email"]} onChange={onChange} placeholder={f.ph}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", background: "#0A0A0A", border: "1px solid #333", color: "white", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={{ display: "block", color: "#C0C0C0", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}>Mesaj *</label>
                <textarea id="message" name="message" required rows={4}
                  value={form.message} onChange={onChange}
                  placeholder="Projenizden bahsedin..."
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", background: "#0A0A0A", border: "1px solid #333", color: "white", fontSize: "14px", outline: "none", resize: "none", boxSizing: "border-box" }} />
              </div>
              {status === "error" && <p style={{ color: "#f87171", fontSize: "13px" }}>Hata oluştu. E-posta ile ulaşın.</p>}
              <button type="submit" disabled={status === "sending"}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", borderRadius: "10px", background: "#6C63FF", color: "white", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer" }}>
                <Send size={15} />
                {status === "sending" ? "Gönderiliyor..." : "Gönder"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

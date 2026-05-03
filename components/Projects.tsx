import { ExternalLink } from "lucide-react";

function GithubIcon() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}

const projects = [
  { title: "Profil Tarama", description: "Sosyal medya ve web platformlarında kullanıcı profillerini analiz eden ve raporlayan uygulama.", tech: ["Python", "Web Scraping", "API"], github: "https://github.com/duyanmehmet/ProfilTarama" },
  { title: "QR Bilet Sistemi", description: "Etkinlikler için QR kodlu bilet satışı ve doğrulama sistemi. Güvenli ödeme ve bilet yönetimi içerir.", tech: ["Node.js", "QR Kod", "JavaScript"], github: "https://github.com/duyanmehmet/qr-ticket" },
  { title: "Kıyafet Mağazası", description: "Ürün listeleme, sepet yönetimi ve sipariş takibi özelliklerine sahip e-ticaret platformu.", tech: ["JavaScript", "HTML", "CSS"], github: "https://github.com/duyanmehmet/kiyafet-magazasi" },
  { title: "Kişisel Portfolyo", description: "Next.js ve Tailwind CSS ile geliştirdiğim kişisel portfolyo sitesi. Animasyonlu arka plan ve blog sayfaları içerir.", tech: ["Next.js", "TypeScript", "Tailwind"], github: "https://github.com/duyanmehmet/kisisel-portfolio" },
];

export default function Projects() {
  return (
    <section style={{ padding: "24px 16px", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
      <p style={{ color: "#6C63FF", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>Projeler</p>
      <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 6vw, 3.5rem)", fontWeight: 900, marginBottom: "24px" }}>Çalışmalarım</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "12px" }}>
        {projects.map(p => (
          <div key={p.title} style={{ background: "#111", border: "1px solid #222", borderRadius: "16px", padding: "16px", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
              <h3 style={{ color: "white", fontWeight: 800, fontSize: "clamp(0.9rem, 4vw, 1.2rem)", lineHeight: 1.3, wordBreak: "break-word", flex: 1 }}>{p.title}</h3>
              <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: "#666", flexShrink: 0 }}><GithubIcon /></a>
            </div>
            <p style={{ color: "#C0C0C0", fontSize: "clamp(0.78rem, 3vw, 0.95rem)", lineHeight: 1.7, marginBottom: "12px", wordBreak: "break-word" }}>{p.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {p.tech.map(t => (
                <span key={t} style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF", fontSize: "11px", fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <a href="https://github.com/duyanmehmet" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 20px", borderRadius: "12px", border: "2px solid #333", color: "#C0C0C0", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
          <GithubIcon /> Tüm projeleri GitHub&apos;da gör
        </a>
      </div>
    </section>
  );
}

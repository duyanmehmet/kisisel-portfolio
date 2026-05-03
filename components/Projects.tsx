import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}

const projects = [
  {
    title: "Profil Tarama",
    description: "Sosyal medya ve web platformlarında kullanıcı profillerini analiz eden, veri toplayan ve raporlayan bir profil tarama uygulaması. Kullanıcı bilgilerini otomatik olarak işler ve görselleştirir.",
    tech: ["Python", "Web Scraping", "API", "Veri Analizi"],
    github: "https://github.com/duyanmehmet/ProfilTarama",
    demo: null,
  },
  {
    title: "QR Bilet Sistemi",
    description: "Etkinlik ve organizasyonlar için QR kodlu bilet satışı ve doğrulama sistemi. Kullanıcılar bilet satın alır, QR kod ile kapıda giriş yapar. Güvenli ödeme ve bilet yönetimi içerir.",
    tech: ["Node.js", "QR Kod", "Ödeme Entegrasyonu", "JavaScript"],
    github: "https://github.com/duyanmehmet/qr-ticket",
    demo: null,
  },
  {
    title: "Kıyafet Mağazası",
    description: "Ürün listeleme, sepet yönetimi ve sipariş takibi özelliklerine sahip e-ticaret platformu. Kategori bazlı filtreleme ve kullanıcı hesap yönetimi içeren tam kapsamlı bir mağaza uygulaması.",
    tech: ["JavaScript", "HTML", "CSS", "E-Ticaret"],
    github: "https://github.com/duyanmehmet/kiyafet-magazasi",
    demo: null,
  },
  {
    title: "Kişisel Portfolyo",
    description: "Next.js ve Tailwind CSS ile geliştirdiğim kişisel portfolyo sitesi. Animasyonlu arka plan, yazı geçiş efektleri, blog sayfaları ve iletişim formu içeren modern bir web uygulaması.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/duyanmehmet/kisisel-portfolio",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] px-3 sm:px-8 md:px-16 py-8 w-full overflow-hidden" style={{ maxWidth: "100vw" }}>

      <p className="text-[#6C63FF] text-sm sm:text-base font-mono uppercase tracking-widest mb-3">Projeler</p>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8">Çalışmalarım</h2>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-7">
        {projects.map(p => (
          <div key={p.title}
            className="rounded-2xl border border-[#222] bg-[#111] p-8 flex flex-col gap-6 hover:border-[#6C63FF]/50 transition-colors">

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-white font-extrabold text-lg sm:text-2xl leading-tight">{p.title}</h3>
              <div className="flex gap-3 shrink-0 mt-1">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-[#666] hover:text-white transition-colors" aria-label="GitHub">
                    <GithubIcon size={22} />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className="text-[#666] hover:text-white transition-colors" aria-label="Demo">
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-[#C0C0C0] text-sm sm:text-base md:text-lg leading-relaxed flex-1">{p.description}</p>

            <div className="flex flex-wrap gap-2.5">
              {p.tech.map(t => (
                <span key={t}
                  className="px-4 py-2 rounded-xl text-sm sm:text-base font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub butonu — kartlardan ayrı, büyük */}
      <div style={{ marginTop: "120px" }}>
        <a href="https://github.com/duyanmehmet" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#333] text-[#C0C0C0] text-lg font-bold hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all">
          <GithubIcon size={24} />
          Tüm projeleri GitHub'da gör
        </a>
      </div>

    </section>
  );
}

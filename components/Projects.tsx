import { ExternalLink } from "lucide-react";

function GithubIcon() {
  return <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}

const projects = [
  {
    title: "FastAPI Auth Sistemi",
    description: "JWT tabanlı kimlik doğrulama, role-based access control ve refresh token yönetimi içeren production-ready API auth altyapısı.",
    tech: ["FastAPI", "PostgreSQL", "JWT", "SQLAlchemy", "Docker"],
    github: "https://github.com/duyanmehmet",
    demo: null,
  },
  {
    title: "REST API Gateway",
    description: "Microservice mimarisine uygun, rate limiting, logging ve middleware desteği olan Node.js tabanlı API Gateway.",
    tech: ["Node.js", "Express.js", "Redis", "Docker"],
    github: "https://github.com/duyanmehmet",
    demo: null,
  },
  {
    title: "E-Ticaret Backend API",
    description: "Ürün yönetimi, sipariş takibi ve ödeme entegrasyonu içeren kapsamlı e-ticaret backend sistemi.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Stripe API"],
    github: "https://github.com/duyanmehmet",
    demo: null,
  },
  {
    title: "CLI Task Manager",
    description: "SQLite veritabanıyla çalışan, görev ekleme, filtreleme ve önceliklendirme özellikli komut satırı uygulaması.",
    tech: ["Python", "SQLite", "Click", "Rich"],
    github: "https://github.com/duyanmehmet",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-20">
      <div className="max-w-[900px] mx-auto w-full">

        <p className="text-[#6C63FF] text-base font-mono uppercase tracking-widest mb-3">Projeler</p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">Çalışmalarım</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.title}
              className="rounded-2xl border border-[#222] bg-[#111] p-7 flex flex-col gap-5 hover:border-[#6C63FF]/50 transition-colors">

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-bold text-xl leading-tight">{p.title}</h3>
                <div className="flex gap-3 shrink-0 mt-0.5">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-[#666] hover:text-white transition-colors" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="text-[#666] hover:text-white transition-colors" aria-label="Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[#C0C0C0] text-base leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://github.com/duyanmehmet" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-[#333] text-[#C0C0C0] text-base font-semibold hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all">
            <GithubIcon />
            Tüm projeleri GitHub'da gör
          </a>
        </div>

      </div>
    </section>
  );
}

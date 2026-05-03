const categories = [
  {
    title: "Backend & API",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST API", "JWT Auth", "Middleware"],
  },
  {
    title: "Veritabanı",
    skills: ["PostgreSQL", "SQLite", "SQL", "SQLAlchemy", "Prisma", "ORM"],
  },
  {
    title: "Araçlar & Diğer",
    skills: ["Git", "GitHub", "Docker", "Postman", "Linux", "Bash"],
  },
];

const learning = [
  "TypeScript", "Redis", "Kubernetes", "AWS",
  "Veri Yapıları", "Algoritmalar", "Sistem Tasarımı", "GraphQL",
];

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] px-8 md:px-16 py-14 w-full">

      <p className="text-[#6C63FF] text-base font-mono uppercase tracking-widest mb-3">Yetenekler</p>
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">Teknoloji Stack</h2>

      {/* Ana kategoriler — büyük kartlar, sayfanın üstünde */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {categories.map(cat => (
          <div key={cat.title}
            className="rounded-2xl border border-[#222] bg-[#111] p-8">
            <h3 className="text-white font-extrabold text-2xl mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map(skill => (
                <span key={skill}
                  className="px-4 py-2 rounded-xl bg-[#1A1A1A] border border-[#333] text-[#D0D0D0] text-base font-semibold hover:border-[#6C63FF] hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Şu an öğreniyorum — aynı kart stili */}
      <div className="rounded-2xl border border-[#6C63FF]/30 bg-[#111] p-8">
        <h3 className="text-white font-extrabold text-2xl mb-6">
          Şu an öğreniyorum
        </h3>
        <div className="flex flex-wrap gap-3">
          {learning.map(skill => (
            <span key={skill}
              className="px-4 py-2 rounded-xl text-base font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/30 hover:bg-[#6C63FF]/20 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

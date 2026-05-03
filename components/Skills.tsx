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

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-20">
      <div className="max-w-[900px] mx-auto w-full">

        <p className="text-[#6C63FF] text-base font-mono uppercase tracking-widest mb-3">Yetenekler</p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">Teknoloji Stack</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {categories.map(cat => (
            <div key={cat.title} className="rounded-2xl border border-[#222] bg-[#111] p-7">
              <h3 className="text-white font-bold text-xl mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(skill => (
                  <span key={skill}
                    className="px-4 py-2 rounded-xl bg-[#1A1A1A] border border-[#333] text-[#D0D0D0] text-base font-medium hover:border-[#6C63FF] hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#222] bg-[#111] p-7">
          <p className="text-[#888] text-sm font-mono uppercase tracking-widest mb-4">Şu an öğreniyorum</p>
          <div className="flex flex-wrap gap-2.5">
            {["TypeScript", "Redis", "Kubernetes", "AWS"].map(skill => (
              <span key={skill}
                className="px-4 py-2 rounded-xl text-base font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/30">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

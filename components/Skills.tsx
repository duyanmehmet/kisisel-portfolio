const categories = [
  {
    title: "Backend & API",
    color: "#6C63FF",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST API", "JWT Auth", "Middleware"],
  },
  {
    title: "Veritabanı",
    color: "#00D9FF",
    skills: ["PostgreSQL", "SQLite", "SQL", "SQLAlchemy", "Prisma", "ORM"],
  },
  {
    title: "Araçlar & Diğer",
    color: "#3ECF8E",
    skills: ["Git", "GitHub", "Docker", "Postman", "Linux", "Bash"],
  },
];

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-16">
      <div className="max-w-[900px] mx-auto w-full">

        <div className="mb-10">
          <p className="text-[#6C63FF] text-sm font-mono uppercase tracking-widest mb-2">Yetenekler</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">Teknoloji Stack</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-[#F5F5F5] font-semibold">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#888888] bg-[#1A1A1A] border border-[#333] hover:text-[#F5F5F5] hover:border-[#555] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">
          <p className="text-[#555] text-sm mb-4 uppercase tracking-widest font-mono">Şu an öğreniyorum</p>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "Redis", "Kubernetes", "AWS"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

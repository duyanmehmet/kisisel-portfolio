const categories = [
  { title: "Backend & API", skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST API", "JWT Auth", "Middleware"] },
  { title: "Veritabanı", skills: ["PostgreSQL", "SQLite", "SQL", "SQLAlchemy", "Prisma", "ORM"] },
  { title: "Araçlar & Diğer", skills: ["Git", "GitHub", "Docker", "Postman", "Linux", "Bash"] },
];

const learning = ["TypeScript", "Redis", "Kubernetes", "AWS", "Veri Yapıları", "Algoritmalar", "Sistem Tasarımı", "GraphQL"];

export default function Skills() {
  return (
    <section style={{ padding: "24px 16px", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
      <p style={{ color: "#6C63FF", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>Yetenekler</p>
      <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 6vw, 3.5rem)", fontWeight: 900, marginBottom: "24px" }}>Teknoloji Stack</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "12px", marginBottom: "40px" }}>
        {categories.map(cat => (
          <div key={cat.title} style={{ background: "#111", border: "1px solid #222", borderRadius: "16px", padding: "16px" }}>
            <h3 style={{ color: "white", fontWeight: 800, fontSize: "clamp(0.9rem, 4vw, 1.1rem)", marginBottom: "12px" }}>{cat.title}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {cat.skills.map(s => (
                <span key={s} style={{ padding: "5px 10px", borderRadius: "8px", background: "#1A1A1A", border: "1px solid #333", color: "#D0D0D0", fontSize: "12px", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "#111", border: "1px solid rgba(108,99,255,0.3)", borderRadius: "16px", padding: "16px" }}>
        <h3 style={{ color: "white", fontWeight: 800, fontSize: "clamp(0.9rem, 4vw, 1.1rem)", marginBottom: "12px" }}>Şu an öğreniyorum</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {learning.map(s => (
            <span key={s} style={{ padding: "5px 10px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.3)", color: "#6C63FF", fontSize: "12px", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const posts = [
  { title: "FastAPI ile JWT Kimlik Doğrulama: Baştan Sona", date: "12 Nisan 2025", readTime: "8 dk", summary: "FastAPI projelerinde JWT tabanlı kimlik doğrulama sistemi nasıl kurulur? Access token, refresh token ve korumalı endpoint oluşturma.", tags: ["FastAPI", "JWT", "Python"], slug: "fastapi-jwt-kimlik-dogrulama" },
  { title: "PostgreSQL Performans İpuçları: Index ve Sorgu Optimizasyonu", date: "28 Mart 2025", readTime: "6 dk", summary: "EXPLAIN ANALYZE kullanımı, doğru index seçimi, N+1 sorunu ve connection pooling ile PostgreSQL sorgularını nasıl hızlandırırsınız?", tags: ["PostgreSQL", "Veritabanı"], slug: "postgresql-performans-ipuclari" },
  { title: "İyi Bir REST API Tasarımının 5 Altın Kuralı", date: "10 Mart 2025", readTime: "5 dk", summary: "URL yapısı, doğru HTTP status code kullanımı, versiyonlama, sayfalama ve tutarlı hata yanıtları — iyi API tasarımının temel kuralları.", tags: ["API", "REST"], slug: "rest-api-tasarim-kurallari" },
];

export default function Blog() {
  return (
    <section style={{ padding: "24px 16px", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
      <p style={{ color: "#6C63FF", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>Blog</p>
      <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 6vw, 3.5rem)", fontWeight: 900, marginBottom: "24px" }}>Teknik Yazılar</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ background: "#111", border: "1px solid #222", borderRadius: "16px", padding: "16px", overflow: "hidden" }}>
              <div style={{ color: "#888", fontSize: "12px", marginBottom: "8px" }}>{post.date} · {post.readTime} okuma</div>
              <h3 style={{ color: "white", fontWeight: 800, fontSize: "clamp(0.9rem, 4vw, 1.2rem)", lineHeight: 1.3, marginBottom: "10px", wordBreak: "break-word" }}>{post.title}</h3>
              <p style={{ color: "#C0C0C0", fontSize: "clamp(0.78rem, 3vw, 0.92rem)", lineHeight: 1.7, marginBottom: "12px", wordBreak: "break-word" }}>{post.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF", fontSize: "11px", fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

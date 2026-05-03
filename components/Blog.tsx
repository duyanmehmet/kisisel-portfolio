import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "FastAPI ile JWT Authentication: Baştan Sona",
    date: "12 Nisan 2025",
    readTime: "8 dk",
    summary: "FastAPI projelerinde JWT tabanlı kimlik doğrulama sistemi nasıl kurulur? Access token, refresh token ve blacklist yönetimi adım adım.",
    tags: ["FastAPI", "JWT", "Python"],
  },
  {
    title: "RESTful API Tasarımında 5 Yaygın Hata",
    date: "28 Mart 2025",
    readTime: "5 dk",
    summary: "URL yapısından status code seçimine kadar en sık yapılan API tasarım hatalarını ve nasıl düzeltileceğini anlattım.",
    tags: ["API", "Best Practice"],
  },
  {
    title: "PostgreSQL Sorgu Optimizasyonu: Index Stratejileri",
    date: "10 Mart 2025",
    readTime: "6 dk",
    summary: "Büyük veri setlerinde yavaşlayan sorgular için index tipleri, EXPLAIN ANALYZE kullanımı ve optimizasyon teknikleri.",
    tags: ["PostgreSQL", "Veritabanı"],
  },
];

export default function Blog() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-20">
      <div className="max-w-[900px] mx-auto w-full">

        <p className="text-[#6C63FF] text-base font-mono uppercase tracking-widest mb-3">Blog</p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">Teknik Yazılar</h2>

        <div className="space-y-5">
          {posts.map(post => (
            <article key={post.title}
              className="rounded-2xl border border-[#222] bg-[#111] p-7 flex flex-col md:flex-row md:items-center gap-5 hover:border-[#6C63FF]/50 transition-colors group cursor-pointer">

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-4 text-sm text-[#888]">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} okuma</span>
                </div>
                <h3 className="text-white font-bold text-xl group-hover:text-[#6C63FF] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#C0C0C0] text-base leading-relaxed">{post.summary}</p>
                <div className="flex gap-2 pt-1">
                  {post.tags.map(tag => (
                    <span key={tag}
                      className="px-3 py-1 rounded-lg text-sm font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowRight size={22} className="text-[#555] group-hover:text-[#6C63FF] transition-colors shrink-0" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

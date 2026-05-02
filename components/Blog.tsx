import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "FastAPI ile JWT Authentication: Baştan Sona",
    date: "12 Nisan 2025",
    readTime: "8 dk",
    summary: "FastAPI projelerinde JWT tabanlı kimlik doğrulama sistemi nasıl kurulur? Access token, refresh token ve blacklist yönetimi.",
    tags: ["FastAPI", "JWT", "Python"],
  },
  {
    title: "RESTful API Tasarımında 5 Yaygın Hata",
    date: "28 Mart 2025",
    readTime: "5 dk",
    summary: "URL yapısından status code seçimine kadar en sık yapılan API tasarım hatalarını ve düzeltme yollarını anlattım.",
    tags: ["API", "Best Practice"],
  },
  {
    title: "PostgreSQL Sorgu Optimizasyonu: Index Stratejileri",
    date: "10 Mart 2025",
    readTime: "6 dk",
    summary: "Büyük veri setlerinde yavaşlayan sorgular için index tiplerini ve EXPLAIN ANALYZE kullanımını inceledim.",
    tags: ["PostgreSQL", "Veritabanı"],
  },
];

export default function Blog() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-16">
      <div className="max-w-[900px] mx-auto w-full">

        <div className="mb-10">
          <p className="text-[#6C63FF] text-sm font-mono uppercase tracking-widest mb-2">Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">Teknik Yazılar</h2>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-[#6C63FF]/50 transition-colors group cursor-pointer"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-4 text-xs text-[#555]">
                  <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime} okuma</span>
                </div>
                <h3 className="text-[#F5F5F5] font-semibold group-hover:text-[#6C63FF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">{post.summary}</p>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/20 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight size={18} className="text-[#555] group-hover:text-[#6C63FF] transition-colors shrink-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

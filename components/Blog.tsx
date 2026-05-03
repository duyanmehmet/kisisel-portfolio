import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "FastAPI ile JWT Kimlik Doğrulama: Baştan Sona",
    date: "12 Nisan 2025",
    readTime: "8 dk",
    summary: "FastAPI projelerinde JWT tabanlı kimlik doğrulama sistemi nasıl kurulur? Access token, refresh token ve korumalı endpoint oluşturma adım adım anlatım.",
    tags: ["FastAPI", "JWT", "Python"],
    slug: "fastapi-jwt-kimlik-dogrulama",
  },
  {
    title: "PostgreSQL Performans İpuçları: Index ve Sorgu Optimizasyonu",
    date: "28 Mart 2025",
    readTime: "6 dk",
    summary: "EXPLAIN ANALYZE kullanımı, doğru index seçimi, N+1 sorunu ve connection pooling ile PostgreSQL sorgularını nasıl hızlandırırsınız?",
    tags: ["PostgreSQL", "Veritabanı", "Performans"],
    slug: "postgresql-performans-ipuclari",
  },
  {
    title: "İyi Bir REST API Tasarımının 5 Altın Kuralı",
    date: "10 Mart 2025",
    readTime: "5 dk",
    summary: "URL yapısı, doğru HTTP status code kullanımı, versiyonlama, sayfalama ve tutarlı hata yanıtları — iyi API tasarımının temel kuralları.",
    tags: ["API", "REST", "Best Practice"],
    slug: "rest-api-tasarim-kurallari",
  },
];

export default function Blog() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] px-8 md:px-16 py-14 w-full">

      <p className="text-[#6C63FF] text-base font-mono uppercase tracking-widest mb-3">Blog</p>
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">Teknik Yazılar</h2>

      <div className="space-y-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <article className="rounded-2xl border border-[#222] bg-[#111] p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-[#6C63FF]/50 transition-colors group cursor-pointer">

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[#888]">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} okuma</span>
                </div>

                <h3 className="text-white font-extrabold text-2xl leading-snug group-hover:text-[#6C63FF] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#C0C0C0] text-lg leading-relaxed">{post.summary}</p>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  {post.tags.map(tag => (
                    <span key={tag}
                      className="px-4 py-2 rounded-xl text-base font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowRight size={26} className="text-[#555] group-hover:text-[#6C63FF] transition-colors shrink-0" />
            </article>
          </Link>
        ))}
      </div>

    </section>
  );
}

import Link from "next/link";

export default function Post2() {
  return (
    <article className="min-h-screen bg-[#0A0A0A] px-6 py-16">
      <div className="max-w-[760px] mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-[#6C63FF] text-sm mb-10 hover:underline">
          ← Geri dön
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {["PostgreSQL", "Veritabanı", "Performans"].map(t => (
            <span key={t} className="px-3 py-1 rounded-lg text-sm font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">{t}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          PostgreSQL Performans İpuçları: Index Kullanımı ve Sorgu Optimizasyonu
        </h1>

        <div className="flex items-center gap-4 text-[#888] text-sm mb-12 pb-8 border-b border-[#222]">
          <span>Mehmet Duyan</span>
          <span>·</span>
          <span>28 Mart 2025</span>
          <span>·</span>
          <span>6 dk okuma</span>
        </div>

        <div className="space-y-6 text-[#C8C8C8] text-lg leading-relaxed">

          <p>Veritabanı performansı backend geliştirmenin en kritik konularından biri. Yanlış yazılmış bir sorgu, milyonlarca satırlık tabloda saniyeler sürebilir. Bu yazıda PostgreSQL'de sık yapılan hatalardan ve çözümlerinden bahsedeceğim.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">EXPLAIN ANALYZE ile Sorgu Analizi</h2>
          <p>Her optimizasyona <strong className="text-white">EXPLAIN ANALYZE</strong> ile başlayın. Bu komut sorgunun nasıl çalıştığını, kaç satır taradığını ve ne kadar sürdüğünü gösterir.</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`EXPLAIN ANALYZE
SELECT * FROM orders
WHERE user_id = 42
ORDER BY created_at DESC;`}
          </pre>
          <p>Çıktıda <code className="text-[#6C63FF] bg-[#6C63FF]/10 px-1 rounded">Seq Scan</code> görüyorsanız index yoktur. <code className="text-[#6C63FF] bg-[#6C63FF]/10 px-1 rounded">Index Scan</code> görüyorsanız index kullanılıyor demektir.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Doğru Index Seçimi</h2>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`-- Tek sütun index
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- Bileşik index (çok sütunlu sorgu için)
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at DESC);

-- Partial index (sadece aktif kayıtlar için)
CREATE INDEX idx_active_users ON users(email) WHERE active = true;`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">N+1 Sorgu Problemi</h2>
          <p>ORM kullanırken en sık karşılaşılan performans sorunudur. Her kullanıcı için ayrı sorgu çalıştırılır:</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`# YANLIŞ - N+1 sorunu
users = session.query(User).all()
for user in users:
    print(user.orders)  # Her kullanıcı için ayrı sorgu!

# DOĞRU - Eager loading
users = session.query(User).options(joinedload(User.orders)).all()`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Connection Pooling</h2>
          <p>Her istek için yeni veritabanı bağlantısı açmak maliyetlidir. SQLAlchemy ile connection pool kullanın:</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`from sqlalchemy import create_engine

engine = create_engine(
    DATABASE_URL,
    pool_size=10,        # Sabit bağlantı sayısı
    max_overflow=20,     # Ek bağlantı limiti
    pool_timeout=30,     # Bekleme süresi
)`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Sonuç</h2>
          <p>Performans optimizasyonu ölçümle başlar. EXPLAIN ANALYZE kullanın, yavaş sorguları loglayn (<code className="text-[#6C63FF] bg-[#6C63FF]/10 px-1 rounded">log_min_duration_statement</code>), ve her zaman gerçek veriyle test edin. Erken optimizasyon yerine gerçek darboğazları hedefleyin.</p>

        </div>
      </div>
    </article>
  );
}

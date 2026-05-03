"use client";

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
        }
      `}</style>

      {/* Yazdır butonu */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-[#6C63FF] text-white rounded-lg font-semibold hover:bg-[#5B54E8] transition-colors"
        >
          PDF olarak İndir
        </button>
      </div>

      <main className="max-w-[800px] mx-auto px-10 py-14 text-[#111] bg-white min-h-screen font-sans">

        {/* Başlık */}
        <div className="border-b-2 border-[#6C63FF] pb-6 mb-8">
          <h1 className="text-4xl font-extrabold text-[#111]">Mehmet Duyan</h1>
          <p className="text-lg text-[#6C63FF] font-semibold mt-1">Backend Developer · API Specialist</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-[#555]">
            <span>duyanmehmet183@gmail.com</span>
            <span>·</span>
            <span>0546 181 11 74</span>
            <span>·</span>
            <span>github.com/duyanmehmet</span>
            <span>·</span>
            <span>linkedin.com/in/mehmet-duyan-746192336</span>
          </div>
        </div>

        {/* Hakkımda */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#6C63FF] uppercase tracking-widest mb-3">Hakkımda</h2>
          <p className="text-[#333] leading-relaxed">
            Hakkari doğumluyum. Iğdır Üniversitesi Bilgisayar Mühendisliği bölümünde eğitimime devam ediyorum.
            Python ve Node.js ile ölçeklenebilir backend sistemleri ve API altyapıları geliştiriyorum.
            Temiz kod, güvenilir API tasarımı ve sürdürülebilir mimari önceliğim.
          </p>
        </section>

        {/* Teknik Beceriler */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#6C63FF] uppercase tracking-widest mb-3">Teknik Beceriler</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-[#333]">
            <div><span className="font-semibold">Backend:</span> Python, FastAPI, Node.js, Express.js</div>
            <div><span className="font-semibold">Veritabanı:</span> PostgreSQL, SQLite, SQLAlchemy, Prisma</div>
            <div><span className="font-semibold">API:</span> REST API, JWT Auth, Middleware</div>
            <div><span className="font-semibold">Araçlar:</span> Git, GitHub, Docker, Postman, Linux</div>
          </div>
        </section>

        {/* Projeler */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#6C63FF] uppercase tracking-widest mb-3">Projeler</h2>
          <div className="space-y-4">
            {[
              { name: "FastAPI Auth Sistemi", desc: "JWT tabanlı kimlik doğrulama, role-based access control ve refresh token yönetimi içeren production-ready API auth altyapısı.", tech: "FastAPI, PostgreSQL, JWT, Docker" },
              { name: "REST API Gateway", desc: "Microservice mimarisine uygun, rate limiting ve middleware desteği olan Node.js tabanlı API Gateway.", tech: "Node.js, Express.js, Redis, Docker" },
              { name: "CLI Task Manager", desc: "SQLite veritabanıyla çalışan görev yönetimi komut satırı uygulaması.", tech: "Python, SQLite, Click" },
            ].map(p => (
              <div key={p.name} className="border-l-2 border-[#6C63FF] pl-4">
                <p className="font-bold text-[#111]">{p.name}</p>
                <p className="text-sm text-[#555] mt-0.5">{p.desc}</p>
                <p className="text-xs text-[#6C63FF] mt-1 font-mono">{p.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eğitim */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#6C63FF] uppercase tracking-widest mb-3">Eğitim</h2>
          <div className="border-l-2 border-[#6C63FF] pl-4">
            <p className="font-bold text-[#111]">Bilgisayar Mühendisliği</p>
            <p className="text-sm text-[#555]">Iğdır Üniversitesi · Devam ediyor</p>
          </div>
        </section>

        {/* Diller */}
        <section>
          <h2 className="text-lg font-bold text-[#6C63FF] uppercase tracking-widest mb-3">Diller</h2>
          <p className="text-sm text-[#333]">Türkçe (Ana dil) · İngilizce (Teknik)</p>
        </section>

      </main>
    </>
  );
}

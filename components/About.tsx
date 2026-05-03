"use client";

import { Download, MapPin, Briefcase, Languages, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] px-3 sm:px-8 md:px-16 py-8 w-full overflow-hidden" style={{ maxWidth: "100vw" }}>

      <p className="text-[#6C63FF] text-sm sm:text-base font-mono uppercase tracking-widest mb-3">Hakkımda</p>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8">Ben Kimim?</h2>

      {/* Biyografi — tam genişlik */}
      <div className="space-y-5 text-[#C8C8C8] text-sm sm:text-base md:text-lg leading-[1.8] w-full max-w-full" style={{ marginBottom: "48px" }}>
        <p>
          Ben <span className="text-white font-bold">Mehmet Duyan</span>. Hakkari doğumluyum. Küçük yaşlardan itibaren teknolojiye olan ilgimle yazılım dünyasına adım attım. Şu an <span className="text-white font-semibold">Iğdır Üniversitesi Bilgisayar Mühendisliği</span> bölümünde eğitimime devam ediyorum.
        </p>
        <p>
          Backend geliştirme ve web uygulama mimarisi alanında uzmanlaşıyorum. <span className="text-white font-semibold">Python, FastAPI ve Node.js</span> ile kurumsal düzeyde API sistemleri geliştiriyor; JWT kimlik doğrulama, middleware mimarisi ve veritabanı optimizasyonu konularında somut çözümler üretiyorum.
        </p>
        <p>
          Hem akademik hem de pratik deneyimlerimi bir araya getirerek gerçek dünya problemlerine temiz, ölçeklenebilir ve güvenilir yazılım çözümleri geliştirmeyi hedefliyorum. Temiz kod ve sürdürülebilir mimari her zaman önceliğim olmuştur.
        </p>
        <p>
          Freelance projelere ve tam zamanlı iş tekliflerine açığım. Seninle çalışmak için buradayım.
        </p>
      </div>

      {/* Bilgi kartları + CV butonu hepsi yan yana */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
        {[
          { icon: MapPin,        label: "Doğum Yeri", value: "Hakkari"            },
          { icon: GraduationCap, label: "Üniversite", value: "Iğdır Üniversitesi" },
          { icon: Briefcase,     label: "Durum",      value: "Freelance & açık"   },
          { icon: Languages,     label: "Dil",        value: "TR / EN"            },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl border border-[#222] bg-[#111] p-3 sm:p-5 flex flex-col gap-1.5 overflow-hidden">
            <Icon size={18} className="text-[#6C63FF]" />
            <p className="text-[#888] text-xs">{label}</p>
            <p className="text-white font-bold text-sm leading-tight">{value}</p>
          </div>
        ))}

        {/* CV kartı */}
        <a
          href="/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-[#222] bg-[#111] p-3 sm:p-5 flex flex-col gap-1.5 hover:border-[#6C63FF] transition-colors group overflow-hidden"
        >
          <Download size={18} className="text-[#6C63FF]" />
          <p className="text-[#888] text-xs">Belge</p>
          <p className="text-white font-bold text-sm group-hover:text-[#6C63FF] transition-colors">CV İndir</p>
        </a>
      </div>

    </section>
  );
}

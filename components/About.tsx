"use client";

import { Download, MapPin, Briefcase, Languages } from "lucide-react";

export default function About() {
  const handleCV = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("CV dosyası yakında eklenecek.");
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-20">
      <div className="max-w-[900px] mx-auto w-full">

        <p className="text-[#6C63FF] text-base font-mono uppercase tracking-widest mb-3">Hakkımda</p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12">Ben Kimim?</h2>

        <div className="grid md:grid-cols-[220px_1fr] gap-14 items-start">

          {/* Sol: Avatar + bilgiler */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="w-40 h-40 rounded-3xl bg-[#141414] border-2 border-[#2A2A2A] flex items-center justify-center">
              <span className="text-6xl font-extrabold text-[#6C63FF]">MD</span>
            </div>

            <div className="space-y-4 w-full">
              {[
                { icon: MapPin,    text: "Türkiye" },
                { icon: Briefcase, text: "Freelance & açık" },
                { icon: Languages, text: "Türkçe / İngilizce" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} className="text-[#6C63FF] shrink-0" />
                  <span className="text-[#D0D0D0] text-base">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleCV}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#333] text-white text-base font-semibold hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all w-full justify-center md:justify-start"
            >
              <Download size={16} />
              CV İndir
            </button>
          </div>

          {/* Sağ: Metin */}
          <div className="space-y-6 text-[#C8C8C8] text-lg leading-relaxed">
            <p>
              Merhaba, ben <span className="text-white font-bold">Mehmet Duyan</span>. Backend geliştirme ve web uygulama mimarisi alanında uzmanlaşmış bir yazılım geliştiricisiyim.
            </p>
            <p>
              <span className="text-white font-semibold">FastAPI, Node.js ve PostgreSQL</span> ile kurumsal düzeyde backend sistemler geliştiriyorum. JWT kimlik doğrulama, middleware mimarisi ve veritabanı optimizasyonu konularında somut çözümler üretiyorum.
            </p>
            <p>
              Temiz kod ve güvenilir API tasarımı benim önceliğim. Freelance projelere ve tam zamanlı iş tekliflerine açığım.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Deneyim",  value: "2+ yıl" },
                { label: "Proje",    value: "10+"    },
                { label: "Uzmanlık", value: "REST / JWT" },
                { label: "Stack",    value: "Python · Node.js" },
              ].map(item => (
                <div key={item.label} className="rounded-2xl border border-[#222] bg-[#111] p-5">
                  <p className="text-[#888] text-sm mb-1">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

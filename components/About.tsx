import { Download, MapPin, Briefcase, Languages } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-16">
      <div className="max-w-[900px] mx-auto w-full">

        <div className="mb-10">
          <p className="text-[#6C63FF] text-sm font-mono uppercase tracking-widest mb-2">Hakkımda</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">Ben Kimim?</h2>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">

          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-36 h-36 rounded-2xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center shrink-0">
              <span className="text-5xl font-bold text-[#6C63FF] select-none">MD</span>
            </div>

            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-[#6C63FF] shrink-0" />
                <span className="text-[#888888]">Türkiye</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Briefcase size={14} className="text-[#6C63FF] shrink-0" />
                <span className="text-[#888888]">Freelance & açık</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Languages size={14} className="text-[#6C63FF] shrink-0" />
                <span className="text-[#888888]">TR / EN</span>
              </div>
            </div>

            <a
              href="/cv-mehmet-duyan.pdf"
              download
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#2A2A2A] text-[#F5F5F5] text-sm font-medium hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all w-full justify-center md:justify-start"
            >
              <Download size={14} />
              CV İndir
            </a>
          </div>

          <div className="space-y-5 text-[#888888] text-base leading-relaxed">
            <p>
              Merhaba, ben <span className="text-[#F5F5F5] font-semibold">Mehmet Duyan</span> — backend geliştirme ve web uygulama mimarisinde uzmanlaşmış bir yazılım geliştiricisiyim.
            </p>
            <p>
              <span className="text-[#F5F5F5] font-medium">FastAPI, Node.js ve PostgreSQL</span> ile kurumsal düzeyde backend sistemler geliştiriyor; JWT kimlik doğrulama, middleware mimarisi ve veritabanı optimizasyonu konularında çözümler üretiyorum.
            </p>
            <p>
              Temiz kod ve güvenilir API tasarımı önceliğim. Freelance projelere ve tam zamanlı tekliflere açığım.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              {[
                { label: "Backend", value: "2+ yıl" },
                { label: "Proje", value: "10+" },
                { label: "API", value: "REST / JWT" },
                { label: "Stack", value: "Python · Node.js" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#2A2A2A] bg-[#111111] p-4">
                  <p className="text-xs text-[#555] mb-1">{item.label}</p>
                  <p className="text-[#F5F5F5] font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

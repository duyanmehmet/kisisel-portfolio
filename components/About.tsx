"use client";

import { Download, MapPin, Briefcase, Languages, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section style={{ padding: "24px 16px", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>

      <p style={{ color: "#6C63FF", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>Hakkımda</p>
      <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 6vw, 3.5rem)", fontWeight: 900, marginBottom: "24px", lineHeight: 1.2 }}>Ben Kimim?</h2>

      <div style={{ color: "#C8C8C8", fontSize: "clamp(0.85rem, 3.5vw, 1.05rem)", lineHeight: 1.8, marginBottom: "40px", wordBreak: "break-word", overflowWrap: "break-word" }}>
        <p style={{ marginBottom: "16px" }}>
          Ben <strong style={{ color: "white" }}>Mehmet Duyan</strong>. Hakkari doğumluyum. Küçük yaşlardan itibaren teknolojiye olan ilgimle yazılım dünyasına adım attım. Şu an <strong style={{ color: "white" }}>Iğdır Üniversitesi Bilgisayar Mühendisliği</strong> bölümünde eğitimime devam ediyorum.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Backend geliştirme ve web uygulama mimarisi alanında uzmanlaşıyorum. <strong style={{ color: "white" }}>Python, FastAPI ve Node.js</strong> ile kurumsal düzeyde API sistemleri geliştiriyor; JWT kimlik doğrulama, middleware mimarisi ve veritabanı optimizasyonu konularında somut çözümler üretiyorum.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Hem akademik hem de pratik deneyimlerimi bir araya getirerek gerçek dünya problemlerine temiz, ölçeklenebilir ve güvenilir yazılım çözümleri geliştirmeyi hedefliyorum.
        </p>
        <p>Freelance projelere ve tam zamanlı iş tekliflerine açığım.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "16px" }}>
        {[
          { icon: MapPin,        label: "Doğum Yeri", value: "Hakkari"            },
          { icon: GraduationCap, label: "Üniversite",  value: "Iğdır Üni."        },
          { icon: Briefcase,     label: "Durum",       value: "Freelance & açık"  },
          { icon: Languages,     label: "Dil",         value: "TR / EN"           },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "12px", overflow: "hidden" }}>
            <Icon size={16} color="#6C63FF" />
            <p style={{ color: "#888", fontSize: "11px", marginTop: "6px" }}>{label}</p>
            <p style={{ color: "white", fontWeight: 700, fontSize: "12px", marginTop: "2px", wordBreak: "break-word" }}>{value}</p>
          </div>
        ))}
      </div>

      <a href="/cv" target="_blank" rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "10px", border: "2px solid #333", color: "white", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
        <Download size={14} />
        CV İndir
      </a>

    </section>
  );
}

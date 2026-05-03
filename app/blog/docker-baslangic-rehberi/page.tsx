"use client";
import Link from "next/link";

export default function Post4() {
  return (
    <article style={{ minHeight: "100vh", background: "#0A0A0A", padding: "40px 20px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#6C63FF", fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "32px" }}>← Geri dön</Link>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {["Docker", "DevOps", "Container"].map(t => (
            <span key={t} style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF", fontSize: "12px", fontWeight: 600 }}>{t}</span>
          ))}
        </div>

        <h1 style={{ color: "white", fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "12px" }}>
          Docker Nedir? Geliştiriciler için Başlangıç Rehberi
        </h1>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "40px", paddingBottom: "24px", borderBottom: "1px solid #222" }}>
          Mehmet Duyan · 20 Şubat 2025 · 7 dk okuma
        </p>

        <div style={{ color: "#C8C8C8", fontSize: "clamp(0.9rem, 3vw, 1.05rem)", lineHeight: 1.85, wordBreak: "break-word" }}>

          <p style={{ marginBottom: "20px" }}>Docker, uygulamaları container adı verilen izole ortamlarda çalıştırmamızı sağlayan bir platformdur. "Bende çalışıyor ama sunucuda çalışmıyor" probleminin kalıcı çözümüdür.</p>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Container vs Sanal Makine</h2>
          <p style={{ marginBottom: "20px" }}>Sanal makineler tüm işletim sistemini kopyalar. Container ise sadece uygulamayı ve bağımlılıklarını paketler. Bu sayede container'lar çok daha hafif ve hızlıdır.</p>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>İlk Dockerfile</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Temel Docker Komutları</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`# Image oluştur
docker build -t uygulamam .

# Container başlat
docker run -p 8000:8000 uygulamam

# Çalışan container'ları listele
docker ps

# Container'ı durdur
docker stop <container_id>`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Docker Compose ile Çoklu Servis</h2>
          <p style={{ marginBottom: "12px" }}>API + veritabanı gibi birden fazla servisi birlikte çalıştırmak için Docker Compose kullanılır:</p>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`version: '3.8'
services:
  api:
    build: .
    ports:
      - "8000:8000"
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: sifre123`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Sonuç</h2>
          <p>Docker, modern yazılım geliştirmede vazgeçilmez bir araçtır. Geliştirme, test ve production ortamlarını tutarlı tutarak "bende çalışıyordu" sorununu tarih yapıyor.</p>
        </div>
      </div>
    </article>
  );
}

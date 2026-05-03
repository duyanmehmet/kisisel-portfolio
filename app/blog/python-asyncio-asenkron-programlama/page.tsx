"use client";
import Link from "next/link";

export default function Post5() {
  return (
    <article style={{ minHeight: "100vh", background: "#0A0A0A", padding: "40px 20px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#6C63FF", fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "32px" }}>← Geri dön</Link>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {["Python", "Asyncio", "Backend"].map(t => (
            <span key={t} style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF", fontSize: "12px", fontWeight: 600 }}>{t}</span>
          ))}
        </div>

        <h1 style={{ color: "white", fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "12px" }}>
          Python Asyncio: Asenkron Programlamaya Giriş
        </h1>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "40px", paddingBottom: "24px", borderBottom: "1px solid #222" }}>
          Mehmet Duyan · 5 Şubat 2025 · 6 dk okuma
        </p>

        <div style={{ color: "#C8C8C8", fontSize: "clamp(0.9rem, 3vw, 1.05rem)", lineHeight: 1.85, wordBreak: "break-word" }}>

          <p style={{ marginBottom: "20px" }}>Python'da asenkron programlama, I/O işlemlerini (veritabanı, API çağrıları, dosya okuma) beklerken diğer işleri yapmaya devam etmeyi sağlar. Bu sayede yüksek performanslı backend uygulamaları yazılabilir.</p>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Senkron vs Asenkron</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`# Senkron - sırayla, toplam 3 saniye
import time

def veri_al(url):
    time.sleep(1)  # API bekleniyor
    return "veri"

# Asenkron - paralel, toplam 1 saniye
import asyncio

async def veri_al(url):
    await asyncio.sleep(1)  # Beklerken başka iş
    return "veri"`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>async/await Temelleri</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`import asyncio

async def kullanici_getir(user_id: int):
    # Veritabanı sorgusu simülasyonu
    await asyncio.sleep(0.1)
    return {"id": user_id, "name": "Mehmet"}

async def main():
    # 3 kullanıcıyı paralel getir
    users = await asyncio.gather(
        kullanici_getir(1),
        kullanici_getir(2),
        kullanici_getir(3),
    )
    print(users)

asyncio.run(main())`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>FastAPI ile Asenkron Endpoint</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/hava-durumu/{sehir}")
async def hava_durumu(sehir: str):
    async with httpx.AsyncClient() as client:
        r = await client.get(f"https://api.weather.com/{sehir}")
        return r.json()`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Ne Zaman Kullanmalı?</h2>
          <p style={{ marginBottom: "20px" }}>Asyncio, I/O bound işlemler için idealdir: API çağrıları, veritabanı sorguları, dosya okuma. CPU-intensive işlemler (hesaplama, görüntü işleme) için multiprocessing daha uygundur.</p>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Sonuç</h2>
          <p>Asyncio ve FastAPI kombinasyonu, Python ile yüksek performanslı API geliştirmenin en etkili yoludur. Doğru kullanıldığında tek bir sunucu binlerce eş zamanlı isteği yönetebilir.</p>
        </div>
      </div>
    </article>
  );
}

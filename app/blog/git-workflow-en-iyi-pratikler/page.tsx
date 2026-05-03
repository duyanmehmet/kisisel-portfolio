"use client";
import Link from "next/link";

export default function Post6() {
  return (
    <article style={{ minHeight: "100vh", background: "#0A0A0A", padding: "40px 20px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#6C63FF", fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "32px" }}>← Geri dön</Link>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {["Git", "Workflow", "Best Practice"].map(t => (
            <span key={t} style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", color: "#6C63FF", fontSize: "12px", fontWeight: 600 }}>{t}</span>
          ))}
        </div>

        <h1 style={{ color: "white", fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "12px" }}>
          Git Workflow: Profesyonel Ekiplerin Kullandığı Yöntemler
        </h1>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "40px", paddingBottom: "24px", borderBottom: "1px solid #222" }}>
          Mehmet Duyan · 18 Ocak 2025 · 5 dk okuma
        </p>

        <div style={{ color: "#C8C8C8", fontSize: "clamp(0.9rem, 3vw, 1.05rem)", lineHeight: 1.85, wordBreak: "break-word" }}>

          <p style={{ marginBottom: "20px" }}>Git'i sadece <code style={{ background: "#1A1A1A", padding: "2px 6px", borderRadius: "4px", color: "#6C63FF" }}>git add . && git commit && git push</code> olarak kullanıyorsanız, ekip çalışmasında büyük sorunlar yaşayabilirsiniz. İşte profesyonel git kullanımının temel kuralları.</p>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>1. Anlamlı Commit Mesajları</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`# KÖTÜ
git commit -m "düzeltme"
git commit -m "güncelleme"

# İYİ - Conventional Commits formatı
git commit -m "feat: kullanıcı kayıt endpoint'i eklendi"
git commit -m "fix: token süre dolma hatası giderildi"
git commit -m "refactor: veritabanı bağlantısı optimize edildi"
git commit -m "docs: API dokümantasyonu güncellendi"`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>2. Branch Stratejisi</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`# Özellik geliştirme
git checkout -b feat/kullanici-girisi

# Hata düzeltme
git checkout -b fix/token-hatasi

# Acil production düzeltmesi
git checkout -b hotfix/guvenlik-acigi

# İş bitince main'e merge et
git checkout main
git merge feat/kullanici-girisi`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>3. .gitignore ile Hassas Dosyaları Koru</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`# .gitignore - bunları asla commit'leme
.env
.env.local
__pycache__/
node_modules/
*.pyc
.DS_Store
venv/`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>4. Git Alias ile Hızlan</h2>
          <pre style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "16px", fontSize: "13px", fontFamily: "monospace", color: "#D0D0D0", overflowX: "auto", marginBottom: "20px" }}>
{`# Sık kullanılan komutlara kısayol
git config --global alias.st status
git config --global alias.lg "log --oneline --graph"
git config --global alias.co checkout

# Artık şöyle kullanabilirsin
git st         # git status
git lg         # güzel görünümlü log
git co main    # git checkout main`}
          </pre>

          <h2 style={{ color: "white", fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, margin: "32px 0 12px" }}>Sonuç</h2>
          <p>İyi bir git disiplini, kod kalitesi kadar önemlidir. Anlamlı commit mesajları, düzenli branch yapısı ve hassas dosyaların korunması profesyonel bir geliştirici olmanın temel göstergelerindendir.</p>
        </div>
      </div>
    </article>
  );
}

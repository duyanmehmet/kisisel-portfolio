import Link from "next/link";

export default function Post3() {
  return (
    <article className="min-h-screen bg-[#0A0A0A] px-6 py-16">
      <div className="max-w-[760px] mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-[#6C63FF] text-sm mb-10 hover:underline">
          ← Geri dön
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {["API", "REST", "Best Practice"].map(t => (
            <span key={t} className="px-3 py-1 rounded-lg text-sm font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">{t}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          İyi Bir REST API Tasarımının 5 Altın Kuralı
        </h1>

        <div className="flex items-center gap-4 text-[#888] text-sm mb-12 pb-8 border-b border-[#222]">
          <span>Mehmet Duyan</span>
          <span>·</span>
          <span>10 Mart 2025</span>
          <span>·</span>
          <span>5 dk okuma</span>
        </div>

        <div className="space-y-6 text-[#C8C8C8] text-lg leading-relaxed">

          <p>Kötü tasarlanmış bir API, onu kullanan geliştiricileri çıldırtır. Yıllarca bakımı yapılacak, genişletilecek bir API'yi doğru kurallarla inşa etmek hem zaman kazandırır hem de hataları azaltır. İşte benim her projede uyguladığım 5 kural:</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. URL'ler Kaynak İsmiyle Olsun, Eylemle Değil</h2>
          <p>URL, bir kaynağa işaret eder. Ne yapılacağını HTTP metodu (GET, POST, PUT, DELETE) belirtir.</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`# YANLIŞ
GET  /getUsers
POST /createUser
DELETE /deleteUser/5

# DOĞRU
GET    /users
POST   /users
DELETE /users/5`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. HTTP Status Code'ları Doğru Kullanın</h2>
          <p>Her yanıt doğru status code taşımalı. <code className="text-[#6C63FF] bg-[#6C63FF]/10 px-1 rounded">200</code> ile hata döndürmek en kötü alışkanlıklardan biridir.</p>
          <div className="bg-[#111] border border-[#222] rounded-xl p-5 space-y-2 text-base font-mono">
            <div><span className="text-green-400">200 OK</span> <span className="text-[#888]">→ Başarılı GET/PUT</span></div>
            <div><span className="text-green-400">201 Created</span> <span className="text-[#888]">→ Başarılı POST</span></div>
            <div><span className="text-green-400">204 No Content</span> <span className="text-[#888]">→ Başarılı DELETE</span></div>
            <div><span className="text-yellow-400">400 Bad Request</span> <span className="text-[#888]">→ Hatalı istek</span></div>
            <div><span className="text-red-400">401 Unauthorized</span> <span className="text-[#888]">→ Token yok/geçersiz</span></div>
            <div><span className="text-red-400">403 Forbidden</span> <span className="text-[#888]">→ Yetki yok</span></div>
            <div><span className="text-red-400">404 Not Found</span> <span className="text-[#888]">→ Kaynak bulunamadı</span></div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Versiyonlama Yapın</h2>
          <p>API'niz değiştiğinde mevcut kullanıcıları kırmamak için versiyonlama şarttır.</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`# URL versiyonlama (tercih edilen)
/api/v1/users
/api/v2/users

# FastAPI'de router ile
from fastapi import APIRouter
v1 = APIRouter(prefix="/api/v1")
v2 = APIRouter(prefix="/api/v2")`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Sayfalama (Pagination) Ekleyin</h2>
          <p>10.000 kayıt döndüren bir endpoint hem sunucuyu hem de istemciyi ezer. Her liste endpointi sayfalama desteklemeli.</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`@app.get("/users")
async def get_users(page: int = 1, limit: int = 20, db: Session = Depends(get_db)):
    offset = (page - 1) * limit
    users = db.query(User).offset(offset).limit(limit).all()
    total = db.query(User).count()
    return {"data": users, "total": total, "page": page, "pages": total // limit}`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Tutarlı Hata Yanıtları</h2>
          <p>Hata mesajları standart bir formatta olmalı. Böylece frontend her hatayı aynı şekilde işleyebilir.</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`# Her hata bu formatta olmalı
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "Kullanıcı bulunamadı",
    "details": {"user_id": 42}
  }
}`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Sonuç</h2>
          <p>İyi bir API tasarımı, onu kullanan geliştiricinin dokümana bakmadan anlayabileceği bir API'dir. Bu 5 kuralı uygularsanız daha az hata, daha kolay bakım ve mutlu bir ekiple çalışırsınız.</p>

        </div>
      </div>
    </article>
  );
}

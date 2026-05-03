import Link from "next/link";

export default function Post1() {
  return (
    <article className="min-h-screen bg-[#0A0A0A] px-6 py-16">
      <div className="max-w-[760px] mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-[#6C63FF] text-sm mb-10 hover:underline">
          ← Geri dön
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {["FastAPI", "JWT", "Python"].map(t => (
            <span key={t} className="px-3 py-1 rounded-lg text-sm font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/25">{t}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          FastAPI ile JWT Kimlik Doğrulama: Baştan Sona
        </h1>

        <div className="flex items-center gap-4 text-[#888] text-sm mb-12 pb-8 border-b border-[#222]">
          <span>Mehmet Duyan</span>
          <span>·</span>
          <span>12 Nisan 2025</span>
          <span>·</span>
          <span>8 dk okuma</span>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-[#C8C8C8] text-lg leading-relaxed">

          <p>Modern web uygulamalarında kimlik doğrulama kritik bir bileşendir. Bu yazıda FastAPI kullanarak güvenli, production-ready bir JWT auth sistemi nasıl kurulur adım adım anlatacağım.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">JWT Nedir?</h2>
          <p>JWT (JSON Web Token), kullanıcı bilgilerini şifreli bir şekilde taşıyan bir standarttır. Üç bölümden oluşur: <strong className="text-white">Header</strong>, <strong className="text-white">Payload</strong> ve <strong className="text-white">Signature</strong>. Sunucu her istekte token'ı doğrular, veritabanına gitmeden kullanıcıyı tanır.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Proje Kurulumu</h2>
          <p>Önce gerekli paketleri yükleyelim:</p>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#6C63FF] overflow-x-auto">
{`pip install fastapi uvicorn python-jose[cryptography] passlib[bcrypt]`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Token Oluşturma</h2>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`from jose import JWTError, jwt
from datetime import datetime, timedelta

SECRET_KEY = "gizli-anahtariniz"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Login Endpoint</h2>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`@app.post("/auth/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Hatalı kullanıcı adı veya şifre")

    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Korumalı Endpoint</h2>
          <pre className="bg-[#111] border border-[#222] rounded-xl p-5 text-sm font-mono text-[#D0D0D0] overflow-x-auto">
{`@app.get("/users/me")
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
    except JWTError:
        raise HTTPException(status_code=401, detail="Geçersiz token")
    return {"email": email}`}
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Refresh Token Stratejisi</h2>
          <p>Access token'ın ömrü kısadır (15-30 dk). Kullanıcıyı tekrar login olmaya zorlamadan oturumu uzatmak için refresh token kullanılır. Refresh token veritabanında saklanır, access token ise saklanmaz. Bu mimari hem güvenliği hem de kullanıcı deneyimini dengeler.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Sonuç</h2>
          <p>FastAPI ile JWT auth kurmak oldukça basit. Önemli olan <strong className="text-white">SECRET_KEY</strong>'i güvenli tutmak, token sürelerini doğru ayarlamak ve HTTPS kullanmak. Sıradaki yazıda role-based access control konusunu ele alacağım.</p>

        </div>
      </div>
    </article>
  );
}

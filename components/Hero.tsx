"use client";

import { useEffect, useRef, useState } from "react";
import type { Section } from "@/app/page";

const ROLES = ["Backend Developer", "API Specialist", "Web Uygulama Geliştirici", "Python Developer"];

const CODE = `const app = FastAPI() @app.get("/users/{id}") async def get_user(id: int): return {"id": id} class Database: def __init__(self): self.conn = psycopg2.connect() def query(self, sql): return self.conn.execute(sql) router.post("/auth/login") async def login(data: LoginSchema): token = jwt.encode({"sub": data.email}, SECRET) return {"token": token} async function fetchAPI(endpoint) { const res = await fetch(endpoint); return res.json(); } const express = require('express'); const app = express(); app.use(cors()); app.use(express.json()); router.get('/api/projects', async (req, res) => { const data = await db.query('SELECT * FROM projects'); res.json(data); }); function authenticate(user) { return jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '7d'}); } class APIGateway { constructor(services) { this.services = services; } async route(req) { const service = this.services[req.path]; return service.handle(req); } } SELECT u.id, u.email, p.title FROM users u JOIN projects p ON u.id = p.user_id WHERE u.active = true ORDER BY p.created_at DESC; @app.middleware("http") async def auth_middleware(request, call_next): token = request.headers.get("Authorization") payload = jwt.decode(token, SECRET) return await call_next(request) const mongoose = require('mongoose'); const Schema = new mongoose.Schema({ name: String, email: { type: String, unique: true }, createdAt: { type: Date, default: Date.now } }); `;

function GithubIcon()    { return <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>; }
function LinkedinIcon()  { return <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
function InstagramIcon() { return <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>; }

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero({ onNav }: { onNav: (s: Section) => void }) {
  const [mounted, setMounted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const cur = ROLES[idx];
    const t = typing
      ? text.length < cur.length
        ? setTimeout(() => setText(cur.slice(0, text.length + 1)), 70)
        : setTimeout(() => setTyping(false), 2000)
      : text.length > 0
        ? setTimeout(() => setText(text.slice(0, -1)), 40)
        : (() => { setIdx(i => (i + 1) % ROLES.length); setTyping(true); return undefined; })();
    return () => clearTimeout(t as ReturnType<typeof setTimeout>);
  }, [text, typing, idx, mounted]);

  const repeated = (CODE + " ").repeat(8);

  return (
    <section className="h-[calc(100vh-4.5rem)] relative overflow-hidden flex flex-col items-center justify-center">

      {/* Kod metni arka planı */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        <pre
          className="text-[11px] leading-5 font-mono text-white/[0.06] whitespace-pre-wrap break-all p-4"
          style={{ wordBreak: "break-all" }}
        >
          {repeated}
        </pre>
      </div>

      {/* Parçacık animasyonu */}
      <ParticleCanvas />

      {/* Orta içerik */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 px-4 w-full max-w-2xl">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
          Mehmet Duyan
        </h1>

        <div className="flex items-center justify-center gap-1.5 h-8">
          <span className="text-[#C0C0C0] text-base sm:text-xl md:text-2xl font-mono tracking-wide">
            {mounted ? text : ""}
          </span>
          <span className="w-0.5 h-6 bg-[#6C63FF] animate-pulse inline-block" />
        </div>

        <div className="flex items-center gap-6 sm:gap-10 mt-2">
          <a href="https://github.com/duyanmehmet" target="_blank" rel="noopener noreferrer"
            className="text-white/50 hover:text-[#6C63FF] transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mehmet-duyan-746192336/" target="_blank" rel="noopener noreferrer"
            className="text-white/50 hover:text-[#6C63FF] transition-colors">
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/mehmet__duyan/" target="_blank" rel="noopener noreferrer"
            className="text-white/50 hover:text-[#6C63FF] transition-colors">
            <InstagramIcon />
          </a>
          <a href="tel:+905461811174"
            className="text-white/50 hover:text-[#6C63FF] transition-colors" aria-label="Telefon">
            <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Aşağı ok */}
      {mounted && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      )}
    </section>
  );
}

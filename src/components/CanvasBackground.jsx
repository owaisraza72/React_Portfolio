import { useRef, useEffect } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let paused = false;

    // ─── Respect prefers-reduced-motion ───────────────────────────────────────
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ─── Pause when tab is hidden ──────────────────────────────────────────────
    const handleVisibility = () => {
      paused = document.hidden;
      if (!paused) tick();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // ─── Resize ────────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildStaticLayers();
    };
    window.addEventListener("resize", resize);

    // ──────────────────────────────────────────────────────────────────────────
    // LAYER 1 — Static star field (drawn once onto an off-screen canvas)
    // ──────────────────────────────────────────────────────────────────────────
    let starCanvas, starCtx;

    const STAR_COUNT = 90;  // faint pinprick stars
    const BOKEH_COUNT = 6;  // large, very soft colour blobs

    const buildStaticLayers = () => {
      starCanvas = document.createElement("canvas");
      starCanvas.width = canvas.width;
      starCanvas.height = canvas.height;
      starCtx = starCanvas.getContext("2d");

      // Tiny stars — two size tiers for depth
      for (let i = 0; i < STAR_COUNT; i++) {
        const x = Math.random() * starCanvas.width;
        const y = Math.random() * starCanvas.height;
        const r =
          Math.random() < 0.25
            ? Math.random() * 1.2 + 0.6
            : Math.random() * 0.5 + 0.2;
        const alpha = Math.random() * 0.35 + 0.08;
        // Slight colour tint — mostly white, occasionally cool-blue
        const tint =
          Math.random() < 0.2
            ? `rgba(160,210,255,${alpha})`
            : `rgba(255,255,255,${alpha})`;
        starCtx.fillStyle = tint;
        starCtx.beginPath();
        starCtx.arc(x, y, r, 0, Math.PI * 2);
        starCtx.fill();
      }

      // Bokeh blobs — large, blurred, very low opacity colour points
      const bokehColors = [
        [99, 102, 241],  // indigo
        [139, 92, 246],  // purple
        [34, 211, 238],  // cyan
        [59, 130, 246],  // blue
        [139, 92, 246],  // purple
        [99, 102, 241],  // indigo
      ];
      for (let i = 0; i < BOKEH_COUNT; i++) {
        const x = Math.random() * starCanvas.width;
        const y = Math.random() * starCanvas.height;
        const r = Math.random() * 180 + 80;
        const [cr, cg, cb] = bokehColors[i % bokehColors.length];
        const g = starCtx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${cr},${cg},${cb},0.055)`);
        g.addColorStop(0.5, `rgba(${cr},${cg},${cb},0.018)`);
        g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        starCtx.fillStyle = g;
        starCtx.beginPath();
        starCtx.arc(x, y, r, 0, Math.PI * 2);
        starCtx.fill();
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // LAYER 2 — Floating network particles
    // ──────────────────────────────────────────────────────────────────────────
    const PARTICLE_COUNT = reducedMotion ? 0 : 35;
    const CONNECT_DIST = 140;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        const speed = Math.random() * 0.28 + 0.06;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * 1.4 + 0.4;
        // Mix of white and accent-tinted dots
        const accent = Math.random();
        if (accent < 0.15) {
          this.color = "rgba(99,102,241,";   // indigo
        } else if (accent < 0.28) {
          this.color = "rgba(34,211,238,";   // cyan
        } else {
          this.color = "rgba(255,255,255,";  // white
        }
        this.alpha = Math.random() * 0.25 + 0.05;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Soft wrap — re-enter from opposite edge
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }

      draw() {
        ctx.fillStyle = this.color + this.alpha + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    };

    // ──────────────────────────────────────────────────────────────────────────
    // LAYER 3 — Slow ambient depth orbs
    // ──────────────────────────────────────────────────────────────────────────
    const drawOrbs = (t) => {
      // Orb A — indigo, top-left drift
      const ax = canvas.width * 0.18 + Math.sin(t * 0.18) * 60;
      const ay = canvas.height * 0.22 + Math.cos(t * 0.12) * 40;
      const ga = ctx.createRadialGradient(ax, ay, 0, ax, ay, canvas.width * 0.38);
      ga.addColorStop(0, "rgba(99,102,241,0.06)");
      ga.addColorStop(1, "transparent");
      ctx.fillStyle = ga;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Orb B — purple, bottom-right drift
      const bx = canvas.width * 0.82 + Math.sin(t * 0.14) * 50;
      const by = canvas.height * 0.78 + Math.cos(t * 0.19) * 35;
      const gb = ctx.createRadialGradient(bx, by, 0, bx, by, canvas.width * 0.38);
      gb.addColorStop(0, "rgba(139,92,246,0.055)");
      gb.addColorStop(1, "transparent");
      ctx.fillStyle = gb;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Orb C — faint cyan, mid-canvas
      const cx2 = canvas.width * 0.55 + Math.cos(t * 0.09) * 80;
      const cy2 = canvas.height * 0.45 + Math.sin(t * 0.11) * 50;
      const gc = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, canvas.width * 0.28);
      gc.addColorStop(0, "rgba(34,211,238,0.03)");
      gc.addColorStop(1, "transparent");
      ctx.fillStyle = gc;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // ──────────────────────────────────────────────────────────────────────────
    // LAYER 4 — Constellation lines between close particles
    // ──────────────────────────────────────────────────────────────────────────
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.09;
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // Main render loop
    // ──────────────────────────────────────────────────────────────────────────
    const tick = () => {
      if (paused) return;

      const t = Date.now() * 0.001;

      // Clear with very slightly tinted dark
      ctx.fillStyle = "#050507";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Layer 1: static star field + bokeh (fast blit, no per-frame cost)
      if (starCanvas) ctx.drawImage(starCanvas, 0, 0);

      // Layer 2: slow ambient orbs (depth shift)
      if (!reducedMotion) drawOrbs(t);

      // Layer 3 + 4: particles + constellation lines
      if (!reducedMotion) {
        particles.forEach((p) => { p.update(); p.draw(); });
        drawConnections();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    // ─── Bootstrap ─────────────────────────────────────────────────────────────
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildStaticLayers();
    initParticles();
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}

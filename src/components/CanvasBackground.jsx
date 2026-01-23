import { useRef, useEffect } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Configuration
    const particleCount = 40; // Reduced count for cleaner look
    const textPrimaryColor = "#6366f1"; // Indigo-500
    const connectionDistance = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)"; // Faint white stars
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = "#050505"; // Dark-900 bg clearing
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gradient Orbs (Simulated with simple radial gradients for performance)
      // We draw these behind particles
      const time = Date.now() * 0.001;

      // Orb 1
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time * 0.5) * 50,
        canvas.height * 0.2 + Math.cos(time * 0.3) * 50,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.6,
      );
      g1.addColorStop(0, "rgba(99, 102, 241, 0.08)"); // Indigo
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Orb 2
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.8 - Math.sin(time * 0.4) * 50,
        canvas.height * 0.8 - Math.cos(time * 0.6) * 50,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.6,
      );
      g2.addColorStop(0, "rgba(139, 92, 246, 0.08)"); // Purple
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and Draw Particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw Connections
      particles.forEach((a, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const b = particles[i];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - (distance / connectionDistance) * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}

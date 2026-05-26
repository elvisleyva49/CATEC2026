import React, { useEffect, useRef } from 'react';

export const BackgroundTech: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface ParticleInstance {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
      update: () => void;
      draw: () => void;
    }

    const particles: ParticleInstance[] = [];
    const maxParticles = 90;
    const connectionDistance = 140;
    const mouse = { x: -9999, y: -9999, active: false };

    class Particle implements ParticleInstance {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        const glow = 0.5 + Math.sin(this.pulse) * 0.25; // 0.25 to 0.75
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(58, 232, 255, ${glow * 0.75})`;
        ctx.fill();

        // Glow halo
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
        grad.addColorStop(0, `rgba(109, 40, 217, ${glow * 0.12})`);
        grad.addColorStop(0.5, `rgba(58, 232, 255, ${glow * 0.1})`);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      const count = Math.min(maxParticles, Math.floor((width * height) / 12000));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        // Connect to active cursor — bright green lines
        if (mouse.active) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const cursorRadius = connectionDistance * 1.8;
          if (dist < cursorRadius) {
            const alpha = (1 - dist / cursorRadius) * 0.55;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(126, 240, 255, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(126, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    // Draw cursor glow dot
    const drawMouseGlow = () => {
      if (!ctx || !mouse.active) return;
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 18);
      grad.addColorStop(0, 'rgba(126, 240, 255, 0.35)');
      grad.addColorStop(0.5, 'rgba(109, 40, 217, 0.1)');
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLines();
      drawMouseGlow();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    // Use clientX/Y directly — canvas is fixed at viewport origin (0,0)
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-tech-wrapper">
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>
      <div className="bg-glow-orb orb-3"></div>
      <canvas ref={canvasRef} className="bg-tech-canvas" />
    </div>
  );
};

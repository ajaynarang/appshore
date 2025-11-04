'use client';

import { useEffect, useRef } from 'react';

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.005;

      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time) * 0.3),
        canvas.height * (0.5 + Math.cos(time) * 0.3),
        0,
        canvas.width * (0.5 + Math.sin(time) * 0.3),
        canvas.height * (0.5 + Math.cos(time) * 0.3),
        canvas.width * 0.8
      );

      gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
      gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)');

      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.cos(time * 0.8) * 0.4),
        canvas.height * (0.5 + Math.sin(time * 0.8) * 0.4),
        0,
        canvas.width * (0.5 + Math.cos(time * 0.8) * 0.4),
        canvas.height * (0.5 + Math.sin(time * 0.8) * 0.4),
        canvas.width * 0.7
      );

      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      gradient2.addColorStop(1, 'rgba(168, 85, 247, 0)');

      const gradient3 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time * 1.2) * 0.35),
        canvas.height * (0.5 + Math.cos(time * 1.2) * 0.35),
        0,
        canvas.width * (0.5 + Math.sin(time * 1.2) * 0.35),
        canvas.height * (0.5 + Math.cos(time * 1.2) * 0.35),
        canvas.width * 0.6
      );

      gradient3.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      gradient3.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}


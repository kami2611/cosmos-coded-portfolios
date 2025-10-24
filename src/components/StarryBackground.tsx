import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars with depth (z-coordinate for parallax)
    const initStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random(), // 0-1 for depth/parallax
          radius: Math.random() * 1.5 + 0.5,
          vx: 0,
          vy: 0,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    };

    initStars();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      starsRef.current.forEach((star) => {
        // Calculate distance from mouse
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        // Interactive repulsion effect
        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          star.vx += Math.cos(angle) * force * 0.5 * (1 - star.z);
          star.vy += Math.sin(angle) * force * 0.5 * (1 - star.z);
        }

        // Apply velocity with damping
        star.x += star.vx;
        star.y += star.vy;
        star.vx *= 0.95;
        star.vy *= 0.95;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

        // Parallax-based opacity and size (closer stars = brighter/bigger)
        const depthOpacity = star.opacity * (0.4 + star.z * 0.6) * twinkle;
        const depthRadius = star.radius * (0.5 + star.z * 0.5);

        // Highlight stars near cursor
        const highlight = distance < interactionRadius 
          ? 1 + (1 - distance / interactionRadius) * 0.5 
          : 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, depthRadius * highlight, 0, Math.PI * 2);
        
        // Gradient glow for highlighted stars
        if (distance < interactionRadius) {
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, depthRadius * highlight * 3
          );
          gradient.addColorStop(0, `rgba(0, 255, 136, ${depthOpacity * highlight})`);
          gradient.addColorStop(0.5, `rgba(100, 200, 255, ${depthOpacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${depthOpacity})`;
        }
        
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #0a0a0f 0%, #121218 100%)' }}
    />
  );
};

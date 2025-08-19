import { useEffect } from "react";

function StarCanvas() {
  useEffect(() => {
    const c = document.getElementById("star-bg");
    const ctx = c.getContext("2d");
    let stars = [];

    function resize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.2 + 0.3,
        base: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2
      }));
    }

    function animate() {
      const t = Date.now() * 0.002;
      ctx.clearRect(0, 0, c.width, c.height);
      stars.forEach(s => {
        ctx.globalAlpha = s.base + Math.sin(t + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    resize();
    animate();
  }, []);

  return <canvas id="star-bg" />;
}

export default StarCanvas;

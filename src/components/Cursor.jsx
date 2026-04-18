import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    let raf;
    const update = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="cur">
      <div id="cdot" ref={dot} />
    </div>
  );
}
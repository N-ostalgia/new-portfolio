import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const update = () => {
      const h = document.documentElement;
      const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div id="progress-bar" style={{ width: "0%" }} />;
}
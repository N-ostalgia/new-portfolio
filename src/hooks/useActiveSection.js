import { useState, useEffect } from "react";

export default function useActiveSection(links) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = links.map((l) => l.toLowerCase());
    const update = () => {
      const scrollY = window.scrollY + 100;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [links]);
  return active;
}
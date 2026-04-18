import { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";
import cvFile from "../assets/Aya_BOUIBAUAN_CV.pdf";   // <-- add this

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);
  const links = ["About","Experience","Projects","Skills","Certifications","Contact"];
  const active = useActiveSection(links);

  return (
    <>
      <nav className={scrolled ? "sc" : ""}>
        <div className="fd" style={{fontSize:"21px",fontWeight:600,color:"var(--gold)",letterSpacing:".05em",fontStyle:"italic"}}>
          Aya<span style={{color:"var(--muted)",fontWeight:300,fontStyle:"normal"}}>.</span>
        </div>
        <div className="nl">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className={active === l.toLowerCase() ? "active" : ""}>{l}</a>
          ))}
        </div>
        <a href={cvFile} download className="bg nbtn" style={{fontSize:"10px",padding:"7px 18px"}}>Resume ↓</a>   {/* changed href */}
        <button className="hbtn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span style={{transform:open?"rotate(45deg) translate(4px,4px)":"none"}}/>
          <span style={{opacity:open?0:1}}/>
          <span style={{transform:open?"rotate(-45deg) translate(4px,-4px)":"none"}}/>
        </button>
      </nav>
      <div className={`drawer${open?" open":""}`}>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
        <a href={cvFile} download onClick={() => setOpen(false)} style={{color:"var(--gold)",borderBottom:"none",paddingTop:"18px",fontSize:"13px"}}>↓ Download Resume</a>   {/* changed href */}
      </div>
    </>
  );
}
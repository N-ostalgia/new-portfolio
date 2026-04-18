import { SKILLS } from "../data/skills";

const SKILL_CATS = [
  { key:"Backend", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8h.01M9 8h.01"/></svg> },
  { key:"Frontend", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { key:"AI & Data Science", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M6 9a6 6 0 0 0 12 0"/><path d="M12 15v7"/><path d="M8 22h8"/><circle cx="12" cy="6" r="1" fill="currentColor"/></svg> },
  { key:"Security & Net", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { key:"Databases", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
  { key:"Tools", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
];

export default function Skills() {
  return (
    <section id="skills" className="sp2" style={{position:"relative",overflow:"hidden",paddingBottom:"clamp(32px,4vw,56px)"}}>
      <div style={{position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)",width:"600px",height:"300px",background:"radial-gradient(ellipse,rgba(201,150,58,.06) 0%,transparent 70%)",pointerEvents:"none",filter:"blur(40px)"}}/>
      <div className="sw" style={{position:"relative"}}>
        <div className="sn rv" style={{marginBottom:"12px"}}>04 — Expertise</div>
        <h2 className="fd rv" style={{fontSize:"clamp(34px,5.5vw,66px)",fontWeight:300,fontStyle:"italic",lineHeight:1,marginBottom:"clamp(32px,5vw,60px)"}}>
          Skills &<br/><span style={{color:"var(--gold)"}}>Technologies</span>
        </h2>
        <div className="sk-cards" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"12px"}}>
          {SKILL_CATS.map(({key, icon}, i) => {
            const items = SKILLS[key];
            return (
              <div key={key} className="rv" style={{animationDelay:`${i*.07}s`,padding:"clamp(20px,2.5vw,28px)",background:"var(--graph)",border:"1px solid rgba(201,150,58,.1)",transition:"all .3s cubic-bezier(.16,1,.3,1)",position:"relative",overflow:"hidden"}}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.background="linear-gradient(135deg,rgba(201,150,58,.1) 0%,rgba(201,150,58,.03) 100%)";
                  el.style.borderColor="rgba(201,150,58,.45)";
                  el.style.boxShadow="0 0 32px rgba(201,150,58,.12), 0 0 64px rgba(201,150,58,.06), inset 0 0 32px rgba(201,150,58,.04)";
                  el.querySelector(".sk-line").style.opacity="1";
                  el.querySelector(".sk-icon").style.background="rgba(201,150,58,.15)";
                  el.querySelector(".sk-icon").style.borderColor="rgba(201,150,58,.5)";
                  el.querySelector(".sk-icon").style.color="var(--gold)";
                  el.querySelector(".sk-icon").style.boxShadow="0 0 14px rgba(201,150,58,.2)";
                  el.querySelector(".sk-label").style.color="var(--ivory)";
                  el.querySelector(".sk-div").style.background="linear-gradient(90deg,rgba(201,150,58,.3),transparent)";
                  el.querySelectorAll(".sk-pill").forEach(p => { p.style.color="var(--ivory)"; p.style.borderColor="rgba(201,150,58,.25)"; p.style.background="rgba(201,150,58,.07)"; });
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.background="var(--graph)";
                  el.style.borderColor="rgba(201,150,58,.1)";
                  el.style.boxShadow="none";
                  el.querySelector(".sk-line").style.opacity="0";
                  el.querySelector(".sk-icon").style.background="rgba(201,150,58,.06)";
                  el.querySelector(".sk-icon").style.borderColor="rgba(201,150,58,.15)";
                  el.querySelector(".sk-icon").style.color="var(--muted)";
                  el.querySelector(".sk-icon").style.boxShadow="none";
                  el.querySelector(".sk-label").style.color="var(--cream)";
                  el.querySelector(".sk-div").style.background="rgba(201,150,58,.07)";
                  el.querySelectorAll(".sk-pill").forEach(p => { p.style.color="var(--muted)"; p.style.borderColor="rgba(201,150,58,.12)"; p.style.background="transparent"; });
                }}
              >
                <div className="sk-line" style={{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,var(--gold),transparent)",opacity:0,transition:"opacity .3s"}}/>
                <div style={{position:"absolute",top:"-30px",right:"-30px",width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle,rgba(201,150,58,.04) 0%,transparent 70%)",pointerEvents:"none"}}/>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"}}>
                  <div className="sk-icon" style={{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(201,150,58,.06)",border:"1px solid rgba(201,150,58,.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--muted)",transition:"all .3s",flexShrink:0}}>{icon}</div>
                  <span className="sk-label" style={{fontFamily:"'Syne',sans-serif",fontWeight:600,fontSize:"clamp(12px,1.3vw,14px)",letterSpacing:".03em",color:"var(--cream)",transition:"color .3s"}}>{key}</span>
                </div>
                <div className="sk-div" style={{height:"1px",marginBottom:"14px",background:"rgba(201,150,58,.07)",transition:"all .3s"}}/>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                  {items.map(s => <span key={s} className="sk-pill" style={{padding:"4px 11px",border:"1px solid rgba(201,150,58,.12)",fontSize:"10px",letterSpacing:".07em",textTransform:"uppercase",color:"var(--muted)",fontFamily:"'DM Mono',monospace",background:"transparent",transition:"all .25s",whiteSpace:"nowrap"}}>{s}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="sp2">
      <div className="sw">
        <div className="sn rv" style={{marginBottom:"12px"}}>02 — Work Experience</div>
        <h2 className="fd rv" style={{fontSize:"clamp(34px,5.5vw,66px)",fontWeight:300,fontStyle:"italic",lineHeight:1,marginBottom:"clamp(32px,5vw,64px)"}}>Experience</h2>
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="rv exp-block" style={{borderLeft:"2px solid var(--gold)",paddingLeft:"clamp(20px,3.5vw,40px)",position:"relative"}}>
            <div style={{position:"absolute",top:0,left:"-5px",width:"8px",height:"8px",borderRadius:"50%",background:"var(--gold)"}}/>
            <div style={{marginBottom:"16px"}}>
              <div className="fm" style={{fontSize:"10px",letterSpacing:".18em",color:"var(--gold)",textTransform:"uppercase",marginBottom:"8px"}}>{exp.period}</div>
              <h3 className="fd" style={{fontSize:"clamp(20px,2.8vw,30px)",fontStyle:"italic",fontWeight:400,color:"var(--ivory)",marginBottom:"4px"}}>{exp.role}</h3>
              <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
                <span style={{fontWeight:600,fontSize:"14px",color:"var(--gold)"}}>{exp.company}</span>
                <span style={{color:"var(--muted)",fontSize:"12px"}}>·</span>
                <span className="fm" style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".05em"}}>{exp.location}</span>
              </div>
            </div>
            <div style={{display:"inline-flex",alignItems:"center",gap:"10px",marginBottom:"18px",padding:"8px 14px",background:"rgba(201,150,58,.05)",border:"1px solid rgba(201,150,58,.1)"}}>
              <span className="fm" style={{fontSize:"9px",color:"var(--gold)",letterSpacing:".14em",textTransform:"uppercase"}}>Project</span>
              <div style={{width:"1px",height:"14px",background:"rgba(201,150,58,.2)"}}/>
              <span className="fd" style={{fontStyle:"italic",fontSize:"15px",color:"var(--cream)"}}>{exp.project}</span>
            </div>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px",marginBottom:"22px"}}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                  <span style={{color:"var(--gold)",fontSize:"9px",marginTop:"5px",flexShrink:0}}>◆</span>
                  <span style={{fontSize:"clamp(13.5px,1.4vw,15.5px)",color:"var(--cream)",lineHeight:1.7}}>{b}</span>
                </li>
              ))}
            </ul>
            <div className="tags">{exp.tags.map(t => <span key={t} className="sp">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
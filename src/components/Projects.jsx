import { useState } from "react";
import { PROJECTS } from "../data/projects";
import FlowNIDS from "./flows/FlowNIDS";
import FlowPOI from "./flows/FlowPOI";
import FlowCBIR from "./flows/FlowCBIR";
import FlowStudyBuddy from "./flows/FlowStudyBuddy";
import FlowTeaching from "./flows/FlowTeaching";
import FlowBanking from "./flows/FlowBanking";

const PROJECT_FLOWS = [FlowNIDS, FlowPOI, FlowCBIR, FlowStudyBuddy, FlowTeaching, FlowBanking];

export default function Projects() {
  const [showFlowFor, setShowFlowFor] = useState(null);

  const toggleFlow = (projectId, show) => {
    setShowFlowFor(show ? projectId : null);
  };

  return (
    <section id="projects" style={{background:"var(--graph)"}} className="sp2">
      <div className="sw">
        <div style={{marginBottom:"clamp(48px,7vw,96px)"}}>
          <div className="sn rv" style={{marginBottom:"12px"}}>03 — Selected Work</div>
          <h2 className="fd rv" style={{fontSize:"clamp(34px,5.5vw,66px)",fontWeight:300,fontStyle:"italic",lineHeight:1}}>Projects</h2>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"clamp(64px,10vw,130px)"}}>
          {PROJECTS.map((p, i) => {
            const FlowComponent = PROJECT_FLOWS[i];
            const isEven = i % 2 === 0;
            const isFlowVisible = showFlowFor === p.id;

            return (
              <div key={p.id} className="rv p-row-inner" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,72px)",alignItems:"center",direction:isEven?"ltr":"rtl"}}>
                {/* Visual column: screenshot OR flow */}
                <div style={{direction:"ltr",position:"relative"}}>
                  <div 
                    style={{
                      position:"relative",
                      border:"1px solid rgba(201,150,58,.15)",
                      background:"var(--obs)",
                      cursor: "pointer",
                      // No fixed padding – height is determined by content
                    }}
                    onClick={() => !isFlowVisible && toggleFlow(p.id, true)}
                  >
                    {!isFlowVisible ? (
                      // Screenshot: image defines container height
                      p.screenshot ? (
                        <img 
                          src={p.screenshot} 
                          alt={p.title}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block"
                          }}
                        />
                      ) : (
                        <div style={{
                          display:"flex",
                          alignItems:"center",
                          justifyContent:"center",
                          background:"var(--obs)",
                          color:"var(--muted)",
                          fontFamily:"'DM Mono',monospace",
                          fontSize:"12px",
                          padding:"80px 20px",
                          textAlign:"center"
                        }}>
                          ⚡ Click to see workflow
                        </div>
                      )
                    ) : (
                      // Flow view with fixed height container
                      <div style={{ height: "300px", position: "relative" }}>
                        {FlowComponent && <FlowComponent />}
                        {/* Back button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlow(p.id, false);
                          }}
                          style={{
                            position:"absolute",
                            bottom:"12px",
                            right:"12px",
                            zIndex:10,
                            background:"rgba(10,9,7,0.8)",
                            border:"1px solid var(--gold)",
                            color:"var(--gold)",
                            padding:"4px 12px",
                            fontSize:"10px",
                            fontFamily:"'DM Mono',monospace",
                            cursor:"pointer",
                            borderRadius:"2px",
                            backdropFilter:"blur(4px)"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = "var(--gold)"}
                          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(10,9,7,0.8)"}
                        >
                          ← Back to screenshot
                        </button>
                      </div>
                    )}
                    {/* Gold corner accents */}
                    <div style={{position:"absolute",top:"8px",left:"8px",width:"12px",height:"12px",borderTop:"1px solid rgba(201,150,58,.3)",borderLeft:"1px solid rgba(201,150,58,.3)",zIndex:1,pointerEvents:"none"}}/>
                    <div style={{position:"absolute",bottom:"8px",right:"8px",width:"12px",height:"12px",borderBottom:"1px solid rgba(201,150,58,.3)",borderRight:"1px solid rgba(201,150,58,.3)",zIndex:1,pointerEvents:"none"}}/>
                  </div>
                </div>

                {/* Text column (unchanged) */}
                <div style={{direction:"ltr"}}>
                  <div className="fm" style={{fontSize:"9px",letterSpacing:".22em",color:"var(--muted)",textTransform:"uppercase",marginBottom:"14px"}}>{p.id} · {p.year}</div>
                  <h3 className="fd" style={{fontSize:"clamp(22px,3vw,36px)",fontWeight:400,fontStyle:"italic",color:"var(--ivory)",lineHeight:1.15,marginBottom:"8px"}}>{p.title}</h3>
                  <div className="fm" style={{fontSize:"9px",color:"var(--gold)",letterSpacing:".16em",textTransform:"uppercase",marginBottom:"16px"}}>{p.subtitle}</div>
                  <p style={{fontSize:"clamp(13px,1.35vw,15.5px)",lineHeight:1.78,color:"var(--cream)",marginBottom:"22px"}}>{p.desc}</p>
                  <div className="tags" style={{marginBottom:"26px"}}>{p.tags.map(t => <span key={t} className="sp">{t}</span>)}</div>
                  <div style={{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"}}>
                    <a href={p.github} target="_blank" rel="noreferrer" className="bg" style={{fontSize:"10px",padding:"9px 22px"}}>GitHub ↗</a>
                    {p.demo
                      ? <a href={p.demo} target="_blank" rel="noreferrer" className="bf" style={{fontSize:"10px",padding:"9px 22px"}}>Live Demo →</a>
                      : <span className="fm" style={{fontSize:"9px",color:"var(--muted)",letterSpacing:".08em",opacity:.5}}>Demo coming</span>
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
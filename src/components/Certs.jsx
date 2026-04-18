import { CERTS, CERT_IMGS } from "../data/certifications";

export default function Certs() {
  return (
    <section id="certifications" className="sp2" style={{paddingTop:"clamp(32px,4vw,56px)"}}>
      <div className="sw">
        <div className="sn rv" style={{marginBottom:"12px"}}>05 — Recognition</div>
        <h2 className="fd rv" style={{fontSize:"clamp(34px,5.5vw,66px)",fontWeight:300,fontStyle:"italic",lineHeight:1,marginBottom:"clamp(32px,5vw,60px)"}}>Certifications</h2>
        <div className="cert-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(12px,2vw,20px)"}}>
          {CERTS.map((c,i) => (
            <div key={i} className="rv cert-flip" style={{animationDelay:`${i*.07}s`,position:"relative",perspective:"900px",aspectRatio:"4/3"}}>
              <div className="cert-inner">
                <div className="cert-front" style={{background:"var(--graph)",border:"1px solid rgba(201,150,58,.12)"}}>
                  {CERT_IMGS[i] ? (
                    <img src={CERT_IMGS[i]} alt={c.title} style={{width:"100%",height:"100%",objectFit:"fill"}}/>
                  ) : (
                    <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px",padding:"20px",textAlign:"center"}}>
                      <div style={{width:"48px",height:"48px",border:"1px solid rgba(201,150,58,.25)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <span className="fm" style={{fontSize:"13px",color:"rgba(201,150,58,.5)"}}>{c.issuer.slice(0,2).toUpperCase()}</span>
                      </div>
                      <span className="fm" style={{fontSize:"8px",letterSpacing:".18em",color:"rgba(201,150,58,.3)",textTransform:"uppercase"}}>cert image</span>
                    </div>
                  )}
                  <div style={{position:"absolute",bottom:"12px",right:"12px"}}>
                    <span className="fm" style={{fontSize:"8px",letterSpacing:".14em",color:"rgba(201,150,58,.4)",textTransform:"uppercase"}}>hover ↺</span>
                  </div>
                </div>
                <div className="cert-back" style={{background:"var(--graph)",border:"1px solid rgba(201,150,58,.25)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(18px,3vw,28px)",textAlign:"center",gap:"16px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <div style={{width:"28px",height:"28px",borderRadius:"50%",border:"1px solid rgba(201,150,58,.35)",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(201,150,58,.08)",flexShrink:0}}>
                      <span className="fm" style={{fontSize:"8px",color:"var(--gold)",letterSpacing:".04em"}}>{c.issuer.slice(0,2).toUpperCase()}</span>
                    </div>
                    <span className="fm" style={{fontSize:"9px",letterSpacing:".14em",color:"var(--gold)",textTransform:"uppercase"}}>{c.issuer}</span>
                  </div>
                  <h3 className="fd" style={{fontSize:"clamp(16px,2vw,22px)",fontStyle:"italic",color:"var(--ivory)",fontWeight:400,lineHeight:1.3}}>{c.title}</h3>
                  <div style={{display:"flex",gap:"6px",flexWrap:"wrap",justifyContent:"center"}}>
                    <span className="fm" style={{fontSize:"8px",letterSpacing:".1em",textTransform:"uppercase",padding:"3px 10px",border:"1px solid rgba(201,150,58,.2)",color:"var(--muted)"}}>{c.tag}</span>
                    <span className="fm" style={{fontSize:"8px",letterSpacing:".1em",textTransform:"uppercase",padding:"3px 10px",border:"1px solid rgba(201,150,58,.2)",color:"var(--muted)"}}>{c.year}</span>
                  </div>
                  <a href={c.link} target="_blank" rel="noreferrer" className="bg" style={{fontSize:"9px",padding:"8px 18px"}}>View Certificate ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
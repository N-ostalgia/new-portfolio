import { useState } from "react";
import myPhoto from "../assets/my_pecture.png";
import cvFile from "../assets/Aya_BOUIBAUAN_CV.pdf";   // <-- import the CV

export default function About() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="about" className="sp2" style={{background:"var(--graph)"}}>
      <div className="sw">
        <div className="g2">
          <div className="portrait-col rvl" style={{position:"relative"}}>
            <div className="portrait-inner" style={{position:"relative",paddingBottom:"110%",background:"var(--obs)",border:"1px solid rgba(201,150,58,.12)",overflow:"hidden"}}>
              {imgFailed ? (
                <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"14px",padding:"24px",textAlign:"center"}}>
                  <div style={{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#8B6420)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontFamily:"'Cormorant Garamond',serif",fontWeight:700,color:"var(--obs)"}}>AB</div>
                  <div className="fd" style={{fontSize:"19px",fontStyle:"italic",color:"var(--ivory)"}}>Aya Bouibauan</div>
                  <div className="fm" style={{fontSize:"9px",letterSpacing:".18em",color:"var(--gold)",textTransform:"uppercase"}}>Computer Science Engineering · ENSAH</div>
                </div>
              ) : (
                <img src={myPhoto} alt="Aya Bouibauan" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}} onError={() => setImgFailed(true)}/>
              )}
              <div style={{position:"absolute",top:"10px",left:"10px",width:"16px",height:"16px",borderTop:"1px solid rgba(201,150,58,.4)",borderLeft:"1px solid rgba(201,150,58,.4)",zIndex:1}}/>
              <div style={{position:"absolute",bottom:"10px",right:"10px",width:"16px",height:"16px",borderBottom:"1px solid rgba(201,150,58,.4)",borderRight:"1px solid rgba(201,150,58,.4)",zIndex:1}}/>
            </div>
          </div>
          <div>
            <div className="sn rv" style={{marginBottom:"12px"}}>01 — About</div>
            <h2 className="fd rv" style={{fontSize:"clamp(30px,4.2vw,54px)",fontWeight:300,fontStyle:"italic",lineHeight:1.1,marginBottom:"24px"}}>
              A developer who thinks<br/><span style={{color:"var(--gold)"}}>in systems,</span><br/>not just features.
            </h2>
            <p className="rv" style={{fontSize:"clamp(14.5px,1.6vw,17px)",lineHeight:1.8,color:"var(--cream)",marginBottom:"14px"}}>
              4th-year Computer Science Engineering student at ENSAH, Morocco. I build full-stack systems: web platforms, desktop apps, and data-driven applications.
            </p>
            <p className="rv" style={{fontSize:"clamp(13.5px,1.45vw,15.5px)",lineHeight:1.8,color:"var(--muted)",marginBottom:"32px"}}>
              I'm drawn to AI and cybersecurity and actively learning both — I've explored these areas through projects like a real-time NIDS and an ML-powered image search engine. Fluent in Arabic (native), French, and English.
            </p>
            <div className="rv" style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
              <a href={cvFile} download className="bf">Download CV →</a>
              <a href="https://github.com/N-ostalgia" target="_blank" rel="noreferrer" className="bg">GitHub ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
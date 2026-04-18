import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const tagline = useTypewriter([
    "Full stack developer",
    "4th-year Computer Science Engineering student",
    "Exploring AI, security & software engineering",
    "Looking for a PFA internship · 2026",
  ]);

  return (
    <section id="home" style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden",paddingTop:"var(--nh)",paddingBottom:"clamp(48px,7vh,80px)"}}>
      <div className="orb" style={{position:"absolute",top:"15%",right:"8%",width:"clamp(200px,28vw,380px)",height:"clamp(200px,28vw,380px)",borderRadius:"50%",background:"radial-gradient(circle,rgba(201,150,58,.1) 0%,transparent 68%)",filter:"blur(48px)",pointerEvents:"none"}}/>
      <div className="sw">
        <div className="fd" style={{fontSize:"clamp(44px,9.5vw,130px)",lineHeight:".88",fontWeight:300,letterSpacing:"-.02em",marginBottom:"28px",opacity:0,animation:"fu .5s .1s forwards"}}>
          {"Aya".split("").map((c,i) => <span key={i} className="hc" style={{animationDelay:`${.25+i*.07}s`,fontStyle:"italic",color:"var(--ivory)"}}>{c}</span>)}
          <br/>
          {"Bouibauan".split("").map((c,i) => <span key={i} className="hc" style={{animationDelay:`${.48+i*.05}s`,color:"var(--gold)"}}>{c}</span>)}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"2px",marginBottom:"36px",opacity:0,animation:"fu .5s .9s forwards",minHeight:"clamp(24px,2.8vw,32px)"}}>
          <span className="fd" style={{fontSize:"clamp(14px,1.8vw,19px)",color:"var(--cream)",fontStyle:"italic",fontWeight:300,lineHeight:1.6}}>{tagline}</span>
          <span style={{display:"inline-block",width:"2px",height:"1em",background:"var(--gold)",marginLeft:"3px",animation:"blink 1s step-end infinite",verticalAlign:"middle",flexShrink:0}}/>
        </div>
        <div style={{display:"flex",gap:"12px",flexWrap:"wrap",opacity:0,animation:"fu .5s 1.1s forwards"}}>
          <a href="#projects" className="bf">View Projects →</a>
          <a href="#contact" className="bg">Get in Touch</a>
        </div>
      </div>
      <div style={{position:"absolute",bottom:"28px",right:"clamp(18px,5vw,60px)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",opacity:0,animation:"fu .5s 1.3s forwards"}}>
        <div className="fm" style={{fontSize:"8px",letterSpacing:".2em",color:"var(--muted)",textTransform:"uppercase",writingMode:"vertical-lr"}}>Scroll</div>
        <div style={{width:"1px",height:"42px",background:"linear-gradient(var(--gold),transparent)"}}/>
      </div>
    </section>
  );
}
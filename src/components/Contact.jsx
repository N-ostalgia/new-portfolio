import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [f, setF] = useState({name:"",email:"",message:""});

  const sub = async e => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mlgpvvqd", {
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({name:f.name,email:f.email,message:f.message}),
      });
      if (res.ok) {
        setSent(true);
        setF({name:"",email:"",message:""});
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{background:"var(--graph)"}} className="sp2">
      <div className="sw">
        <div className="ctg">
          <div>
            <div className="sn rv" style={{marginBottom:"12px"}}>06 — Contact</div>
            <h2 className="fd rv" style={{fontSize:"clamp(32px,4.5vw,58px)",fontWeight:300,fontStyle:"italic",lineHeight:1.1,marginBottom:"22px"}}>
              Let's build<br/><span style={{color:"var(--gold)"}}>something</span><br/>together.
            </h2>
            <p className="rv" style={{fontSize:"clamp(13.5px,1.5vw,16px)",color:"var(--muted)",lineHeight:1.8,marginBottom:"34px"}}>
              PFA internship, collaboration, or just a conversation about development and engineering — I'm always open.
            </p>
            <div className="rv" style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {[
                {icon:"✉",label:"aya.bouibauan@etu.uae.ac.ma",href:"mailto:aya.bouibauan@etu.uae.ac.ma"},
                {icon:"in",label:"LinkedIn / aya-bouibauan",href:"https://www.linkedin.com/in/aya-bouibauan-a12a04201"},
                {icon:"gh",label:"@N-ostalgia",href:"https://github.com/N-ostalgia"},
                {icon:"𝕏",label:"@NostalgiAB08",href:"https://twitter.com/NostalgiAB08"},
              ].map(({icon,label,href}) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",color:"var(--cream)",transition:"color .2s"}}
                  onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"}
                  onMouseLeave={e=>e.currentTarget.style.color="var(--cream)"}
                >
                  <span className="fm" style={{fontSize:"10px",color:"var(--gold)",width:"16px",textAlign:"center"}}>{icon}</span>
                  <span className="fm" style={{fontSize:"11px",letterSpacing:".04em"}}>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="rvr">
            <form onSubmit={sub} style={{display:"flex",flexDirection:"column",gap:"30px"}}>
              {[["Name","name","text","Your full name"],["Email","email","email","your@email.com"],["Message","message","textarea","Your message or opportunity..."]].map(([lbl,key,type,ph]) => (
                <div key={key}>
                  <label className="fm" style={{display:"block",fontSize:"9px",letterSpacing:".2em",color:"var(--gold)",textTransform:"uppercase",marginBottom:"8px"}}>{lbl}</label>
                  {type==="textarea"
                    ? <textarea className="ci" rows={5} placeholder={ph} value={f[key]} onChange={e=>setF({...f,[key]:e.target.value})} required style={{resize:"none"}}/>
                    : <input className="ci" type={type} placeholder={ph} value={f[key]} onChange={e=>setF({...f,[key]:e.target.value})} required/>
                  }
                </div>
              ))}
              <button type="submit" className="bf" style={{alignSelf:"flex-start"}} disabled={loading}>
                {loading ? "Sending..." : sent ? "Sent ✓" : "Send Message →"}
              </button>
              {error && <p className="fm" style={{fontSize:"11px",color:"#e87070",marginTop:"8px",letterSpacing:".04em"}}>Something went wrong — please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
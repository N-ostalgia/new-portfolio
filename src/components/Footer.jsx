export default function Footer() {
  return (
    <footer style={{padding:"24px clamp(18px,5vw,60px)",borderTop:"1px solid rgba(201,150,58,.08)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
      <div className="fd" style={{fontStyle:"italic",color:"var(--muted)",fontSize:"13px"}}>© 2025 Aya Bouibauan</div>
      <div className="fm" style={{fontSize:"9px",letterSpacing:".14em",color:"var(--muted)",textTransform:"uppercase"}}>Built with <span style={{color:"var(--gold)"}}>React</span> · ENSAH, Morocco</div>
      <a href="#home" className="fm" style={{fontSize:"9px",letterSpacing:".14em",color:"var(--gold)",textTransform:"uppercase",textDecoration:"none"}}>Top ↑</a>
    </footer>
  );
}
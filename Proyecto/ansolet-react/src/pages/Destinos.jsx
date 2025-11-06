function Destinos() {
  return (
    <main className="container" style={{padding:"2rem 0"}}>
      <h1>Destinos</h1>
      <p>Acá va tu grilla/lista de destinos con botones “Explorar”.</p>
      {/* Ejemplo básico */}
      <div className="offers-grid" style={{marginTop:"1rem"}}>
        <article className="offer">
          <span className="badge">Hot</span>
          <h4>Maldivas</h4>
          <p>Playas, relax y snorkel</p>
          <a className="btn btn-offer" href="/destino/maldivas">Explorar</a>
        </article>
        <article className="offer">
          <span className="badge">Top</span>
          <h4>Mallorca</h4>
          <p>Mediterráneo y calas</p>
          <a className="btn btn-offer" href="/destino/mallorca">Explorar</a>
        </article>
      </div>
    </main>
  )
}
export default Destinos

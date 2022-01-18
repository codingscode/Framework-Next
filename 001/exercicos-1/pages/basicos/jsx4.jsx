

export default function jsxdif4() {
    const subtitulo = 'estou no subtitulo'
    
    const trechotag = <h2>outro h2</h2>

    return (
       <div>
          <h1>Integração JS e JSX</h1>
          <h2>{subtitulo}</h2>
          <h3>{3*7}</h3>
          <h3>{Math.max(61, 18)}</h3>
          {trechotag}
          <h3>{ehpositivo(7)}</h3>
       </div>
    )
 
}

function ehpositivo(valor) {
   if (valor >= 0) {
      return 'sim'
   }
   return 'não'
}

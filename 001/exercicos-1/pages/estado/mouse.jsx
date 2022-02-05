


export default function mouse() {

   let x = 0
   let y = 0
   

   const estilos = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#222", color: "#fff", height: '100vh' } 

   function quandoMove(ev) {
      //console.log(ev.clientX, ev.clientX)
      x = ev.clientX
      y = ev.clientY
   }

   return (
      <div style={ estilos } onMouseMove={quandoMove} >
         <span>Eixo X: {x}</span>
         <span>Eixo Y: {y}</span>
      </div>
   )
}


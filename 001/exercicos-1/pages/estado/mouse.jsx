


export default function mouse() {

   const estilos = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#222", color: "#fff", height: '100vh' } 

   function quandoMove(ev) {
      console.log(ev)
   }

   return (
      <div style={ estilos } onMouseMove={quandoMove} >
         <span>Eixo X: </span>
         <span>Eixo Y: </span>
      </div>
   )
}


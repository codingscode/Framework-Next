import { useState } from 'react'



export default function mouse() {

   const [x, setX] = useState(0)
   const [y, setY] = useState(0)
   
   

   const estilos = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#222", color: "#fff", height: '100vh' } 

   function quandoMove(ev) {
      //console.log(ev.clientX, ev.clientX)
      setX(ev.clientX)
      setY(ev.clientY)
   }

   return (
      <div style={ estilos } onMouseMove={quandoMove} >
         <span>Eixo X: {x}</span>
         <span>Eixo Y: {y}</span>
      </div>
   )
}


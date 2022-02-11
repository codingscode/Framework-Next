import { useState } from 'react'
import NumeroDisplay from '../../components/NumeroDisplay'



export default function contador() {
   const [ numero, setNumero ] = useState(0)

   const mais = () => setNumero(numero + 1)
   
   const menos = () => setNumero(numero - 1)
   

   return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 
           alignItems: 'center' }} >
         <h1>contador</h1>
         <NumeroDisplay numero={numero} />
         <div>
            <button onClick={mais} >+</button>
            <button onClick={menos} >-</button>
         </div>
      </div>
   )
}


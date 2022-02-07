import { useState } from 'react'
import ContadorDisplay from '../../components/ContadorDisplay'



export default function contador() {
   const [ numero, setNumero ] = useState(0)

   const mais = () => setNumero(numero + 1)
   
   const menos = () => setNumero(numero - 1)
   

   return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 
           alignItems: 'center' }} >
         <h1>contador</h1>
         <ContadorDisplay numero={numero} />
         <div>
            <button onClick={mais} >+</button>
            <button onClick={menos} >-</button>
         </div>
      </div>
   )
}


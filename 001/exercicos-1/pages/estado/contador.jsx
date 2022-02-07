import { useState } from 'react'



export default function contador() {
   const [ numero, setNumero ] = useState(0)

   function mais() {
      setNumero(numero + 1)
   }

   function menos() {
      setNumero(numero - 1)
   }


   return (
      <div>
         <h1>contador</h1>
         <div>Valor: {numero}</div><br />
         <button onClick={mais} >+</button>
         <button onClick={menos} >-</button>
      </div>
   )
}


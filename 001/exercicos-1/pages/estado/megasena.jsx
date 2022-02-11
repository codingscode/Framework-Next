import { useState } from 'react'
import NumeroDisplay from '../../components/NumeroDisplay'
import { mega } from '../../functions/mega'



export default function megasena() {

   const [ numeros, setNumeros ] = useState(mega())

   function renderizarNumeros() {
      
      return numeros.map((n, i) => <NumeroDisplay key={i} numero={n} />)
   }


   return (
      <div>
         <h1>Mega Sena</h1>
         <div style={{ display: 'flex' }} >
            {renderizarNumeros()}
         </div>
      </div>
   )
}


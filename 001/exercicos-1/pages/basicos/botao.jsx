
function acao1() {
   console.log('acao1')
}


export default function botao() {
   function acao2() {
      console.log('acao2')
   }

   function acao4(evento) {
      console.log('evento:')
      console.log(evento)
   }
   
   function acao5(evento) {
      console.log('evento:')
      console.log(evento)
   }

   return (

      <div>
         <button onClick={acao1} >Click #01</button>
         <button onClick={acao2} >Click #02</button>
         <button onClick={ () => console.log('acao3') } >Click #03</button>
         <button onClick={acao4} >Click #04</button>
         <button onClick={ e => acao5(e.altKey)} >Click #05</button>
         <div>
            <input type="text" onChange={ (e) => console.log(e.target.value) }  />
         </div>
      </div>
   )
}


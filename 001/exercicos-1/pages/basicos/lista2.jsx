
function gerarLista(final = 10) {
   const lista = []
   
   for (let i = 1; i <= final; i++) {
      lista.push(<span key={i} >{i}, </span>)
   }
  
   return lista

}

export default function lista() {
   return (
      <div>
         <div>
            {gerarLista(4)}
         </div>
         <div>
            {gerarLista(6)}
         </div>
         
      </div>
   )
}




